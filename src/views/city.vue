<template>
    <div class="city">
        <div class="main">
            <h1>热门城市/区域</h1>
            <div class="Popular" >
                <p v-for="item in Popularcity" :key="item.id">{{ item }}</p>
            </div>
            <div class="citycontant" id="left">
                <ul class="content">
                    <div :id="i" class="showcity" v-for="(item,i) in title" :key="item.id">
                        <div class="left">
                            <h1>{{item}}</h1>
                            <div class="Popularcitycity">
                                <p v-show="item===v.log" v-for="v in city" :key="v.name">
                                    {{ v.name }}
                                </p>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
        <div id="right">
            <ul class="content">
                <div v-for="(item,i) in title" :key="item.id">
                    <h1 @click="btn(i)">{{item}}</h1>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll' //引入滚动插件 固定需要把要滚动的容器装在<ul class='content'></ul>
    export default {
        data(){
            return {
                curSelected:0,
                title:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',],
                city:[
                    {name:"北京",log:"B"},
                    {name:"上海",log:"S"},
                    {name:"深圳",log:"S"},
                    {name:"广州",log:"G"},
                    {name:"杭州",log:"H"},
                    {name:"成都",log:"C"},
                    {name:"重庆",log:"C"},
                    {name:"西昌",log:"X"},
                    {name:"南京",log:"N"},
                    {name:"河北",log:"H"},
                    {name:"武汉",log:"W"},
                    {name:"攀枝花",log:"P"},
                ],
                Popularcity: ['全国','国际及港澳台','北京','上海','深圳','广州','杭州','成都','中国香港',]
            }
        },
        mounted(){
             // 在mounted中拿DOM节点
            // 右侧滚动板
            new Bscroll(document.getElementById('right'),{
                click:true,
            })
            // 左侧滚动板
            this.left = new Bscroll(document.getElementById('left'),{
                probeType:3,
            })
            //滚动获取高度事件
            // this.left.on('scroll', coor => {
            //     var y = Math.abs(coor.y)
            //     // console.log(y)
            //     this.getheight.forEach(obj=>{
            //         // console.log(obj)
            //         if(y>=obj.min && y<obj.max){
            //             this.curSelected = obj.i
            //             return
            //         }
            //     })
            // })
        },
        methods:{
            btn(i){
                console.log(i)
                this.curSelected = i
                this.left.scrollToElement(document.getElementById(i) ,600)
            },
        },
        computed:{
            // getheight(){
            //     let arr = []
            //     var total = 0
            //     this.city.forEach((obj,i)=>{
            //         var divheight = document.getElementById(i).offsetHeight
            //         arr.push({min:total ,max:total+=divheight ,i})
            //     })
            //     return arr
            // },
        }
    }
</script>

<style>
    .city{
        width: 1080px;
        display: flex;
    }
    .Popular{
        width: 800px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .Popular>p{
        text-align: center;
        width: 200px;
        border: 0px solid #000;
        border-radius: 10px;
        background: #eee;
        padding: 10px;
        font-size: 30px;
    }
    .showcity{
        display: flex;
        justify-content: space-between
    }
    .citycontant{
        height: 500px;
        overflow: hidden;
        overflow-y:auto;
    }
    #right{
        height: 900px;
        overflow: hidden;
        overflow-y:auto;
    }
</style>