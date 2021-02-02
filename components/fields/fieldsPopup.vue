<template>
   <b-modal id="modal-center" centered title="How Would You Like To Add Your Field?" title-class="font-18" hide-footer>
        <div class="box box-block bg-white">
            <div class="row">
                <div class="col-md-6">
                    <!--<center>
                         <img src="assets/images/satellite/draw-polygon.png" width="131" height="123"></center><br>											 -->
                    <center>Draw your field shape directly on the map</center><br>
                    <center>
                        <nuxt-link to="/fields/draw" class="btn btn-success" title="">Draw Polygon</nuxt-link>
                    </center>
                </div>																		
                <div class="col-md-6">
                    <div class="">
                        <div class="t-content text-xs-right">										
                            <!-- <center><img src="assets/images/satellite/upload-geojson.png" width="131" height="123"></center><br>												 -->
                            <center>Upload your map in geoJSON file format</center><br>
                            <center><nuxt-link to="/fields/add" class="btn btn-success" title="">Upload Your Map</nuxt-link></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </b-modal>
</template>

<script>
export default {
    name: "filedsPopup",
}
</script>