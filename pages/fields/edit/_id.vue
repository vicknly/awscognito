<template>
<div>
    
    
    <!-- start page title -->
    <div class="row">
        <div class="col-12">
            <div class="page-title-box d-flex align-items-center justify-content-between">
                <h4 class="mb-0">Edit Fields</h4>

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
                            <button type="submit" @click="updateFarm" class="btn btn-primary w-md">Save Changes</button>
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
import Farm from '~/components/fields/farm.vue';
import fieldsPopup from '~/components/fields/fieldsPopup.vue';
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
        farm: Farm,
        fieldsPopup: fieldsPopup,
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
            id: this.$route.params.id,
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
        this.getFarm();
    },
    methods: {
        getFarm: function(){
            API.get("farmsApi", "/farms/" + this.$route.params.id, {}).then(response => {
                this.fieldsData = response;
                this.selectedCrop = this.fieldsData.body.Items[0].crop;
                this.selectedVariety = this.fieldsData.body.Items[0].variety;
                this.location = this.fieldsData.body.Items[0].location;
                this.sowingDate = this.fieldsData.body.Items[0].sowingDate;
                this.harvestingDate = this.fieldsData.body.Items[0].harvestingDate;
                console.log("Returned Data: ", this.fieldsData);
            }).catch(err => {
                console.log(err);
            });
        },
        updateFarm() {
            API.put("farmsApi", "/farms", {
                body: {
                    id: this.id,
                    location: this.location,
                    crop: this.selectedCrop,
                    variety: this.selectedVariety,
                    sowingDate: this.sowingDate,
                    harvestingDate: this.harvestingDate
                }
            }).then(response => {
                console.log("Attributes: ", response);
                this.$router.push('/fields');
                // this.selectedCrop = response.body.Items[0].crop;
                // this.selectedVariety = response.body.Items[0].variety;
                // this.location = response.body.Items[0].location;
                // this.sowingDate = response.body.Items[0].sowingDate;
                // this.harvestingDate = response.body.Items[0].harvestingDate;
                
            }).catch(err => {
                console.log(err);
            });
        },
    },
    middleware: "authentication"
};
</script>