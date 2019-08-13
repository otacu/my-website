<template>
    <div>
        <googlemaps-map
                :center.sync="center"
                :zoom.sync="zoom"
                :options="mapOptions"
                @idle="onIdle"
                @click="onMapClick">

            <!-- User Position -->
            <googlemaps-user-position
                    @update:position="setUserPosition"
            />

            <googlemaps-marker
                    v-for="marker of markers"
                    :key="marker._id"
                    :label="{
                         color: marker._id === currentMarker._id ? 'white' : 'black',
                         fontFamily: 'Material Icons',
                         fontSize: '20px',
                         text: marker.title,
                     }"
                    :position="marker.position"
                    @click="selectMarker(marker)"
            />

        </googlemaps-map>
    </div>
</template>

<script>

    export default {
        props: ["animeId"],
        data() {
            return {
//                center: {lng: 139.0855869, lat: 35.9916443},
//                zoom: 10,
//                mapOptions: {},
//                markers: [{_id: 1, position: {lng: 139.7562635, lat: 35.7359733}, title: "田端"}, {
//                    _id: 2,
//                    position: {lng: 139.7033559, lat: 35.6938253},
//                    title: "新宿"
//                }],
//                currentMarker: {_id: 1, position: {lng: 139.7562635, lat: 35.7359733}, title: "田端"}
                center: {lng: 139.0855869, lat: 35.9916443},
                zoom: 10,
                mapOptions: {},
                markers: [],
                currentMarker: {}
            }
        },
        methods: {
            onIdle(){

            },
            onMapClick(){
            },
            setUserPosition(){

            },
            selectMarker(marker){
                this.currentMarker = marker
            }
        },
        watch: {
            /*监听父组件点击菜单项的变化*/
            'animeId'(){
                // 清空所有的marker
                this.currentMarker = {};
                this.markers=[];
                // 查询动画对应的圣地，创建marker
                this.axios.get('/seichi-api/getSeichi?animeId='+this.animeId, {})
                    .then((response) => {
                        let seichiList = response.data;
                        for(let seichi of seichiList){
                            let marker = {
                                _id:seichi.id,
                                title:seichi.name,
                                position:{
                                    lng:seichi.lng,lat:seichi.lat
                                }
                            };
                            this.markers.push(marker);
                        }
                        // 将center设置为第一个marker的位置
                        this.center = {
                            lng:seichiList[0].lng,
                            lat:seichiList[0].lat
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            }
        }
    }
</script>

<style>
    .vue-google-map {
        height: 54.9rem;
    }
</style>
