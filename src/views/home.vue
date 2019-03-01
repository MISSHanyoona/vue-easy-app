<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in LBlist" :key="item.url">
                <a :href="item.url" target="_blank">
                    <img :src="item.img" >
                </a>
            </mt-swipe-item>
        </mt-swipe>

        <!-- 六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatboxes"></span>
                    <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-redo"></span>
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class=" mui-icon-extra mui-icon-extra-alipay" style="font-size:40px;"></span>
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-videocam"></span>
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
    </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui';
export default {
    data(){
        return{
            LBlist: []
        }
    },
    created(){
        this.getLunBo();
    },
    methods: {
        getLunBo(){
            Indicator.open('加载中...')
            this.$axios.get('https://www.easy-mock.com/mock/5c788cfdcec76554d421acfd/vue-easy-app/getLunbo').then(res => {       
                console.log(res.data)
                const { status, data } = res.data
                if(status != 200 ){
                    Toast('请求失败!')
                    Indicator.close()
                }else{
                    this.LBlist = data
                    Indicator.close()

                }
            }).catch(err => {
                console.log(err)
            })
        }
    }
    
}
</script>

<style lang="less" scoped>
.mint-swipe{
    height: 200px;
    img{
        width: 100%;
        height: 100%;
    }
}
.mui-grid-view.mui-grid-9{
    border: none;
    background-color: #fff;
    
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;

}
</style>


