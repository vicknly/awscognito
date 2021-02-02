<template>
<div>
    <link href="https://api.mapbox.com/mapbox-gl-js/v2.0.1/mapbox-gl.css" rel="stylesheet" />
    <link href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.2.0/mapbox-gl-draw.css" rel="stylesheet" />
    
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
                            <div class="col-lg-12">
                                <div class="mt-3">
                                    <label>Field Location</label>
                                    <p class="text-muted mb-2">
                                        Provide the location of your farm field in 25 chars or less:
                                    </p>
                                    <b-form-input v-model="location"></b-form-input>
                                </div>
                                
                            </div>
                        </div>      
                        <br>      
                        <div class="row">
                            <div class="col-lg-12">
                                <label for="">Draw Polygon</label>
                                <div id="map" class="basemap"></div>
                            </div>
                        </div>                              
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
import mapboxgl from "mapbox-gl";

import * as MapboxDraw from '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw';
// import JQuery from 'jquery';
window.$ = window.jQuery = require('jquery');
import {
    mapState
} from "vuex";
export default {
    head() {
        return {
            title: `${this.title} | Nuxtjs Responsive Bootstrap 4 Admin Dashboard`,
        };
    },
    components: {
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
            ],
            accessToken: 'pk.eyJ1IjoiZGFlZ3JhIiwiYSI6ImNrNzNqdzQwazAwc2wza3FyZnRzemx1MHkifQ.sroNpzHAk5XYUWuGEB0M-Q'
        }
    },
    computed: {
        ...mapState({
            user: state => state.auth.user
        }),
    },
    mounted() {
        let $vm = this;
        mapboxgl.accessToken = this.accessToken;
        var mapbox = new mapboxgl.Map({
        container: 'map', // container id
            style: 'mapbox://styles/mapbox/satellite-v9', //hosted style id
            center: [-91.874, 42.76], // starting position
            zoom: 12 // starting zoom
        });
        
        var draw = new MapboxDraw({
            displayControlsDefault: false,
            controls: {
                polygon: true,
                trash: true
            }
        });
        mapbox.addControl(draw);

        mapbox.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true
            })
        )
        
        mapbox.on('draw.create', updateArea);
        mapbox.on('draw.delete', updateArea);
        mapbox.on('draw.update', updateArea);
        
        function updateArea(e) {
            var data = draw.getAll();
            var answer = document.getElementById('calculated-area');
            if (data.features.length > 0) {
                // console.log(data);
                $vm.fileData = JSON.stringify(data.features[0].geometry.coordinates);
                console.log("Coordinates: ", $vm.fileData);
            } else {
                if (e.type !== 'draw.delete')
                    alert('Use the draw tools to draw a polygon!');
            }
        }


        $(".mapboxgl-canvas").removeAttr("style");
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
                    coordinates: this.fileData
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
    },
    middleware: "authentication"
};
</script>

<style>
    .mapboxgl-canvas {
        position: relative !important;
        height: 400px !important;
    }
    .mapboxgl-map {
        overflow: visible;
    }
</style>