/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/



const AWS = require('aws-sdk')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var bodyParser = require('body-parser')
var express = require('express')
var lambda = new AWS.Lambda()
const { v4: uuidv4 } = require("uuid")

AWS.config.update({ region: process.env.TABLE_REGION });

const dynamodb = new AWS.DynamoDB.DocumentClient();

let tableName = "farmsData";
if (process.env.ENV && process.env.ENV !== "NONE") {
    tableName = tableName + '-' + process.env.ENV;
}

const userIdPresent = false; // TODO: update in case is required to use that definition
const partitionKeyName = "id";
const partitionKeyType = "S";
const sortKeyName = "";
const sortKeyType = "";
const hasSortKey = sortKeyName !== "";
const path = "/farms";
const UNAUTH = 'UNAUTH';
const hashKeyPath = '/:' + partitionKeyName;
const sortKeyPath = hasSortKey ? '/:' + sortKeyName : '';
// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next()
});

// convert url string param to expected Type
const convertUrlType = (param, type) => {
    switch (type) {
        case "N":
            return Number.parseInt(param);
        default:
            return param;
    }
}

const shuffle = array => {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

app.get(path, function(request, response) {

    let params = {
        TableName: tableName,
        Key: {
            id: request.userId
        }
    }

    dynamodb.scan(params, (error, result) => {
        if (error) {
            response.json({ statusCode: 500, error: error.message });
        } else {
            response.json({ statusCode: 200, url: request.url, body: result });
        }
    });
});


app.get(path + "/:id", function(request, response) {
    let params = {
        TableName: tableName,
        KeyConditionExpression: "#id = :id",
        ExpressionAttributeNames: {
            "#id": "id"
        },
        ExpressionAttributeValues: {
            ":id": request.params.id
        }
    }

    dynamodb.query(params, (error, result) => {
        if (error) {
            response.json({ statusCode: 500, error: error.message });
        } else {
            response.json({ statusCode: 200, url: request.url, body: result });
        }
    });
});

app.delete(path + "/:id", function(request, response) {


    var params = {
        FunctionName: 'agroDeletePolygon', // the lambda function we are going to invoke
        InvocationType: 'RequestResponse',
        LogType: 'Tail',
        Payload: '{ "id": "' + request.body.polyId + '" }'
    };

    lambda.invoke(params, function(err, data) {
        if (err) {
            response.json({ statusCode: 500, error: err });
        } else {
            let db_params = {
                TableName: tableName,
                Key: {
                    id: request.params.id
                }
            }

            dynamodb.delete(db_params, (error, result) => {
                if (error) {
                    response.json({ statusCode: 500, error: error.message });
                } else {
                    response.json({ statusCode: 200, url: request.url, body: JSON.stringify(result) });
                }
            });

        }
    })




});


app.post(path, function(request, response) {
    const timestamp = new Date().toISOString();
    var params = {
        FunctionName: 'agroCreatePolygon', // the lambda function we are going to invoke
        InvocationType: 'RequestResponse',
        LogType: 'Tail',
        Payload: '{ "coordinates": ' + request.body.coordinates + ' }'
    };

    lambda.invoke(params, function(err, data) {
        if (err) {
            response.send(err);
        } else {
            let output = JSON.parse(data.Payload);
            let id = output.id;
            let polyName = output.name;
            let area = output.area;
            let seed = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(""); // and any other characters
            seed = shuffle(seed); // probably optional since array_is randomized; this may be redundant
            rand = '';

            for (let i = 0; i < 2; i++) {
                let index = getRndInteger(0, seed.length - 1);
                rand += seed[index];
            }

            newstring = id.substr(-5);
            let fieldId = rand + newstring;

            // response.send(data.Payload);

            let db_params = {
                TableName: tableName,
                Item: {
                    polyId: id,
                    polyName: polyName,
                    polyCoordinates: request.body.coordinates,
                    fieldId: fieldId,
                    location: request.body.location,
                    area: area,
                    crop: request.body.crop,
                    variety: request.body.variety,
                    sowingDate: request.body.sowingDate,
                    harvestingDate: request.body.harvestingDate,
                    userId: request.body.userId,
                    id: uuidv4(),
                    createdAt: timestamp,
                    updatedAt: timestamp
                }
            }

            dynamodb.put(db_params, (error, result) => {
                if (error) {
                    response.json({ statusCode: 500, error: error.message });
                } else {
                    response.json({ statusCode: 200, url: request.url, body: params.Item });
                }
            });

        }
    })



});



app.put(path, function(request, response) {
    const timestamp = new Date().toISOString();
    let params = {
        TableName: tableName,
        Key: {
            id: request.body.id,
        },
        ExpressionAttributeNames: { '#location': 'location', '#crop': 'crop', '#variety': 'variety', '#sowingDate': 'sowingDate', '#harvestingDate': 'harvestingDate' },
        ExpressionAttributeValues: {},
        ReturnValues: 'UPDATED_NEW',
    }

    params.UpdateExpression = "SET ";

    if (request.body.location) {
        params.ExpressionAttributeValues[":location"] = request.body.location;
        params.UpdateExpression += "#location = :location, ";
    }

    if (request.body.crop) {
        params.ExpressionAttributeValues[":crop"] = request.body.crop;
        params.UpdateExpression += "#crop = :crop, ";
    }

    if (request.body.variety) {
        params.ExpressionAttributeValues[":variety"] = request.body.variety;
        params.UpdateExpression += "#variety = :variety, ";
    }

    if (request.body.sowingDate) {
        params.ExpressionAttributeValues[":sowingDate"] = request.body.sowingDate;
        params.UpdateExpression += "#sowingDate = :sowingDate, ";
    }

    if (request.body.harvestingDate) {
        params.ExpressionAttributeValues[":harvestingDate"] = request.body.harvestingDate;
        params.UpdateExpression += "#harvestingDate = :harvestingDate, ";
    }

    if (request.body.location || request.body.area || request.body.crop || request.body.variety || request.body.sowingDate || request.body.harvestingDate) {
        params.ExpressionAttributeValues[":updatedAt"] = timestamp;
        params.UpdateExpression += "updatedAt = :updatedAt";
    }

    dynamodb.update(params, (error, result) => {
        if (error) {
            response.json({ statusCode: 500, error: error.message });
        } else {
            response.json({ statusCode: 200, url: request.url, body: result.Attributes });
        }
    });
});


app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app