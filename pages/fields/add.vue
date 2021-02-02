<template>
<div>
    
    
    <!-- start page title -->
    <div class="row">
        <div class="col-12">
            <div class="page-title-box d-flex align-items-center justify-content-between">
                <h4 class="mb-0">Add Field</h4>

            </div>
        </div>
    </div>
    <!-- end page title -->

    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">

                    <form @submit.prevent>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="mt-3">
                                <label>Field Location</label>
                                <p class="text-muted mb-2">
                                    Provide the location of your farm field in 25 chars or less:
                                </p>
                                <b-form-input v-model="location"></b-form-input>
                            </div>
                            
                        </div>

                        <div class="col-lg-6">
                            <div class="mt-3">
                                <label>Upload geoJSON</label>
                                <p class="text-muted mb-2">
                                    GeoJSON is an open standard file format for representing map data. Upload to import your field boundaries:
                                </p>
                                <input type="file" ref="myFile" @change="selectedFile">                                                
                            </div>
                        </div>
                    </div>      
                    <br>                                    
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label class="control-label">Crop</label>
                                    <b-form-select v-model="selectedCrop" :options="cropOptions"></b-form-select>
                                </div>
                                
                            </div>

                            <div class="col-lg-6">
                                <div class="form-group mt-3 mt-lg-0">
                                    <label class="control-label">Variety</label>
                                    <b-form-select v-model="selectedVariety" :options="varietyOptions"></b-form-select>
                                    
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-lg-6">
                                <b-form-group id="sowingDate-date" label="Sowing Date" label-for="Sowing Date">
                                    <b-form-datepicker id="sowingDate" class="mb-2" v-model="sowingDate"></b-form-datepicker>
                                </b-form-group>
                            </div>

                            <div class="col-lg-6">
                                <b-form-group id="harvestingDate-date" label="Harvesting Date" label-for="Harvesting Date">
                                    <b-form-datepicker id="harvestingDate" class="mb-2" v-model="harvestingDate"></b-form-datepicker>
                                </b-form-group>
                            </div>
                        </div>  
                        <br>
                        <div>
                            <button type="submit" @click="addFarm" class="btn btn-primary w-md">Save Changes</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
    <!-- end row -->
</div>
</template>


<script>
/**
 * Invoice-list component
 */
import { API } from 'aws-amplify';
import {
    mapState
} from "vuex";
export default {
    head() {
        return {
            title: `${this.title} | Nuxtjs Responsive Bootstrap 4 Admin Dashboard`,
        };
    },
    data() {
        return {
            title: "Fields management",
            selectedCrop: "",
            selectedVariety: "",
            location: "",
            sowingDate: "",
            harvestingDate: "",
            fileData: "",
            fieldsData: {
                body: {
                    Items: {

                    },
                    Count: 0
                }
            },
            cropOptions: [
                { value: "", text: "Select" },
                { value: "Almonds", text: "Almonds" },
                { value: "Apple", text: "Apple" },
                { value: "Banana", text: "Banana" },
                { value: "Blueberries", text: "Blueberries" },
                { value: "Cashew", text: "Cashew" },
                { value: "Cassava", text: "Cassava" },
                { value: "Cocoa", text: "Cocoa" },
                { value: "Coconut", text: "Coconut" },
                { value: "Corn", text: "Corn" },
                { value: "Cotton", text: "Cotton" },
                { value: "Cucumber", text: "Cucumber" },
                { value: "Grain Sorghum", text: "Grain Sorghum" },
                { value: "Oats", text: "Oats" },
                { value: "Olives", text: "Olives" },
                { value: "Palm Fruit", text: "Palm Fruit" },
                { value: "Peanut / Groundnut", text: "Peanut / Groundnut" },
                { value: "Pineapple", text: "Pineapple" },
                { value: "Plantain", text: "Plantain" },
                { value: "Potatoes", text: "Potatoes" },
                { value: "Rapeseed", text: "Rapeseed" },
                { value: "Rice", text: "Rice" },
                { value: "Soybeans", text: "Soybeans" },
                { value: "Strawberries", text: "Strawberries" },
                { value: "Sugarcane", text: "Sugarcane" },
                { value: "Sweet Sorghum", text: "Sweet Sorghum" },
                { value: "Soybeans", text: "Soybeans" },
                { value: "Tobacco", text: "Tobacco" },
                { value: "Tomatoes", text: "Tomatoes" },
                { value: "Watermelon", text: "Watermelon" },
                { value: "Wheat", text: "Wheat" },
                { value: "Yam", text: "Yam" },
                { value: "Other", text: "Other" }
            ],
            varietyOptions: [
                { text: "Select", value: "" },
                { text: "Demo", value: "Demo" },
            ]
        };
    },
    computed: {
        ...mapState({
            user: state => state.auth.user
        }),
    },
    mounted() {
        //this.getFarms();
    },
    methods: {
        addFarm: function(){
            API.post("farmsApi", "/farms", {
                body: {
                    location: this.location,
                    crop: this.selectedCrop,
                    variety: this.selectedVariety,
                    sowingDate: this.sowingDate,
                    harvestingDate: this.harvestingDate,
                    userId: this.user.user.attributes.sub,
                    coordinates: JSON.stringify(this.fileData)
                }
            }).then(response => {
                console.log(response);
                // this.getFarms();
                // this.fieldsData.body.Items.push(response.body);
                this.$router.push('/fields');
            }).catch(err => {
                console.log(err);
            });
        },
        selectedFile() {
            console.log('selected a file');
            console.log(this.$refs.myFile.files[0]);
            
            let file = this.$refs.myFile.files[0];
            //if(!file || file.type !== 'text/plain') return;
            
            // Credit: https://stackoverflow.com/a/754398/52160
            let reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload =  evt => {
                this.fileData = JSON.parse(evt.target.result).features[0].geometry.coordinates;
                console.log("File Data: ", JSON.stringify(this.fileData) );
            }
            reader.onerror = evt => {
                console.error(evt);
            }
        
        }
    },
    middleware: "authentication"
};
</script>