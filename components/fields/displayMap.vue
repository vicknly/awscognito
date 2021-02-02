<template>
    <div id="mapContainer" class="basemap"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
// import JQuery from 'jquery';
window.$ = window.jQuery = require('jquery');
export default {
    name: "MapBox",
    props: ["coordinates"],
    data() {
        return {
            deleteId: null,
            polyId: null,
            accessToken: 'pk.eyJ1IjoiZGFlZ3JhIiwiYSI6ImNrNzNqdzQwazAwc2wza3FyZnRzemx1MHkifQ.sroNpzHAk5XYUWuGEB0M-Q',
        }
    },
    methods: {
        tryDelete(id, polyId) {
            this.deleteId = id;
            this.polyId = polyId;
            this.$emit('try-delete', this.deleteId, this.polyId);
        },
        tryEdit(id) {
            this.$emit('try-edit', id);
        }
        
    },
    mounted() {
        let coord = JSON.parse(this.coordinates);//.replaceAll(",", ", ");
        mapboxgl.accessToken = this.accessToken;
        let mapbox = new mapboxgl.Map({
        container: "mapContainer",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [coord[0][0][0], coord[0][0][1]],//[-121.1779, 37.6687],
        zoom: 12,
        });



        mapbox.on('load', function () {
            
            mapbox.addSource('maine', {
                        'type': 'geojson',
                        'data': {
                        'type': 'Feature',
                        'geometry': {
                        'type': 'Polygon',
                        'coordinates': coord
                    }
                }
            });

            mapbox.addLayer({
                'id': 'maine',
                'type': 'fill',
                'source': 'maine',
                'layout': {},
                'paint': {
                    'fill-color': '#000',
                    'fill-opacity': 0.8
                }
            });
        });

        console.log(coord);
        $(".mapboxgl-canvas").removeAttr("style");
    },
}
</script>

<style scoped>
</style>