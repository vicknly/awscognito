<template>
<div>
    <link href='https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css' rel='stylesheet' />
    <!-- start page title -->
    <div class="row">
        <div class="col-12">
            <div class="page-title-box d-flex align-items-center justify-content-between">
                <PageHeader :title="title" />
                <div class="page-title-right">
                    <button type="button" class="btn btn-primary waves-effect waves-light" v-b-modal.modal-center><i class="fas fa-plus"></i> Add New Field</button>
                </div>
            </div>
        </div>
    </div>
    <!-- end page title -->

    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title mb-4">My Fields ({{fieldsData.body.Count}})</h4>
                    <div class="table-responsive">
                        <table class="table table-centered table-nowrap mb-0">
                            <thead class="thead-light">
                                <tr>
                                    <th style="width: 20px;">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                                            <label class="custom-control-label" for="customCheck1">&nbsp;</label>
                                        </div>
                                    </th>
                                    <th>Field ID</th>
                                    <th>Location</th>
                                    <th>Area</th>
                                    <th>Crop</th>
                                    <th>Variety</th>
                                    <th>Sowing Date</th>
                                    <th>Harvesting Date</th>
                                    <th>View</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <farm v-for="item in fieldsData.body.Items" :key="item.id" :item="item" @try-delete="handleDelete" @try-edit="handleEdit" @try-open-map="handleMap" />
                            </tbody>
                        </table>
                    </div>
                    <!-- end table-responsive -->
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->

    <div class="row">
        <fieldsPopup />
    </div>

    <div class="row">
        <div class="col-md-12">
            <b-modal id="modal-map" centered title="Map" title-class="font-18" hide-footer>
            <div class="box box-block bg-white">
                <div class="row" style="min-height: 500px;">
                    <div class="col-md-12">
                        <mapbox :coordinates="coordinates" />
                    </div>
                </div>
            </div>
        </b-modal>
            
        </div>
    </div>
    

</div>
</template>


<script>
/**
 * Invoice-list component
 */
import { API } from 'aws-amplify';
import Farm from '~/components/fields/farm.vue';
import MapBox from '~/components/fields/displayMap.vue';
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
        mapbox: MapBox
    },
    data() {
        return {
            title: "Fields management",
            coordinates: '',
            fieldsData: {
                body: {
                    Items: {

                    },
                    Count: 0
                }
            },
        };
    },
    computed: {
        ...mapState({
            user: state => state.auth.user
        }),
    },
    methods: {
        getFarms: function(){
            API.get("farmsApi", "/farms", {userId: this.user.user.attributes.sub}).then(response => {
                console.log(response);
                this.fieldsData = response;
            }).catch(err => {
                console.log(err);
            });
        },
        addFarm: function(){
            API.post("farmsApi", "/farms", {
                body: {
                    polyId: "polyId 3",
                    polyName: "polyName 3",
                    fieldId: "fieldId 3",
                    location: "location 3",
                    area: "area 3",
                    crop: "crop",
                    variety: "variety",
                    sowingDate: "sowingDate",
                    harvestingDate: "harvestingDate",
                    userId: this.user.user.attributes.sub
                }
            }).then(response => {
                console.log(response);
                // this.getFarms();
                this.fieldsData.body.Items.push(response.body);
            }).catch(err => {
                console.log(err);
            });
        },
        handleEdit(id) {
            API.put("farmsApi", "/farms", {
                body: {
                    id: id,
                    location: "location",
                    area: "area",
                    crop: "crop",
                    variety: "variety",
                    sowingDate: "sowingDate",
                    harvestingDate: "harvestingDate"
                }
            }).then(response => {
                console.log("Attributes: ", response);
                let items = [...this.fieldsData.body.Items];
                let item_index = null; 
                items.forEach( function(item, index) {
                    if( item.id == id ) {
                        item_index = index;
                    }
                }); 

                for(let attr in response.body) {
                    this.fieldsData.body.Items[item_index][attr] = response.body[attr];
                    //console.log(this.fieldsData.body.Items[item_index][attr]);
                }
                
            }).catch(err => {
                console.log(err);
            });
        },
        handleDelete( id, polyId ) {
            API.del("farmsApi", "/farms/" + id, {
                "body": {
                    polyId: polyId
                }
            }).then(response => {
                console.log(response);
                let items = [...this.fieldsData.body.Items];
                this.fieldsData.body.Items = items.filter( item => item.id != id);
            }).catch(err => {
                console.log(err);
            });
        },
        handleMap( coordinates ) {
            this.coordinates = coordinates;
            console.log("Coordinates: ", coordinates);
        }
    },
    mounted() {
        this.getFarms();
    },
    middleware: "authentication"
};
</script>

<style scoped>
    .basemap {
        width: 100%;
        height: 100%;
    }
</style>