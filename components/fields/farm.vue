<template>
    <tr>
        <td>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck2">
                <label class="custom-control-label" for="customCheck2">&nbsp;</label>
            </div>
        </td>
        <td><a href="dashboard.html" class="text-body font-weight-bold">#{{item.fieldId}}</a> </td>
        <td>{{item.location}}</td>
        <td>
            {{item.area}}
        </td>
        <td>
            {{item.crop}}
        </td>
        <td>
            {{item.variety}}
        </td>
        <td>
            {{item.sowingDate}}
        </td>
        <td>
            {{item.harvestingDate}}
        </td>                                                    
        <td>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-success btn-sm btn-rounded waves-effect waves-light" v-b-modal.modal-map @click="sendMapCoordinates(item.polyCoordinates)">
                <i class="fas fa-info-circle"></i> Map
            </button>
        </td>
        <td>
            <ul class="list-inline mb-0">
                <li class="list-inline-item">
                    <nuxt-link :to="{ path: 'fields/edit/' + item.id }" class="px-2 text-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i class="uil uil-pen font-size-18"></i></nuxt-link>
                </li>
                <li class="list-inline-item">
                    <a @click="tryDelete(item.id, item.polyId)" class="px-2 text-danger" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i class="uil uil-trash-alt font-size-18"></i></a>
                </li>
                <li class="list-inline-item dropdown">
                    <a class="text-muted dropdown-toggle font-size-18 px-2" href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true">
                        <i class="uil uil-ellipsis-v"></i>
                    </a>
                
                    <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            </ul>
        </td>
    </tr>
</template>

<script>
export default {
    name: "Farm",
    props: ["item"],
    data() {
        return {
            deleteId: null,
            polyId: null,
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
        },
        sendMapCoordinates(cooredinates) {
            this.$emit('try-open-map', cooredinates);
        }
        
    }
}
</script>

<style scoped>

</style>