<template>
    <div>
        <el-container style="height: 57.5rem; border: 1px solid #eee">
            <el-aside width="22rem" style="background-color: rgb(238, 241, 246)">
                <el-header style="font-size: 1.8rem"><span>作品一览</span></el-header>
                <el-menu style="text-align: left;" v-for="anime of animeList" :key="`anime-${anime.id}`">
                    <el-menu-item @click="clickAnime(anime.id)">{{ anime.name }}</el-menu-item>
                </el-menu>
            </el-aside>

            <el-container>
                <el-main>
                    <gmap :animeId="currentAnimeId"></gmap>
                </el-main>
            </el-container>
        </el-container>

    </div>
</template>

<script>
    import gmap from '@/components/gmap';
    export default {
        components: {
            gmap
        },
        data() {
            return {
                currentAnimeId: 0,
                animeList: []
            }
        },
        methods: {
            initMenu(){
                /*初始化菜单*/
                this.axios.get('/seichi-api/getAllAnime', {})
                    .then((response) => {
                        this.animeList = response.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            clickAnime(animeId){
                this.currentAnimeId = animeId
            }
        },
        mounted: function () {
            this.initMenu();
        }
    }
</script>

<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }

    .el-menu-item {
        font-size: 1.4rem !important;
    }
</style>
