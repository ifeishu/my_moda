<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/ddc8c8922cbb694dfb73c86bb03fce22.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/b9905b35bb0afa9050d9ddbe04d82d29.jpeg" alt />
      </swiper-slide>

      <div class="pagination-home text-right swiper-pagination" slot="pagination"></div>
    </swiper>
    <!--end of swiper-->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-grey">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2 text-center">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow"></i>
        <span>收起</span>
      </div>
    </div>
    <!--nav of end-->

    <m-list-card icon="menu1" title="新闻资讯" :categories="newCats">
      <template #items="{category}">
         <div class="py-2" v-for="(news,i) in category.newsList" :key="i">
        <span>[{{news.categoryName}}]</span>
        <span>|</span>
        <span>{{news.title}}</span>
        <span>{{news.date}}</span>
      </div>
      </template>
      
     
    </m-list-card>

    <m-card icon="menu1" title="英雄列表"></m-card>
    <m-card icon="menu1" title="精彩视频"></m-card>
    <m-card icon="menu1" title="图文攻略"></m-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        initialSlide: 0,
        loop: true,
        speed: 400,
        direction: "horizontal",
        paginationClickable: true,
        mousewheelControl: true,
        autoplay: 1000,
        //autoplay: true,
        // autoplayDisableOnInteraction: false,
        observer: true,
        observeParents: true,
        debugger: true,
        pagination: ".pagination-home"
      },
      newCats: [
        {
          name: "热门",
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: "公告",
            title: "6月2日全服不停机",
            date: "06/01"
          }))
        },
        {
          name: "新闻",
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: "公告",
            title: "6月2日全服不停机",
            date: "06/01"
          }))
        },
        {
          name: "公告",
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: "公告",
            title: "6月2日全服不停机",
            date: "06/01"
          }))
        },
        {
          name: "活动",
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: "公告",
            title: "6月2日全服不停机",
            date: "06/01"
          }))
        },
        {
          name: "赛事",
          newsList: new Array(5).fill(1).map(v => ({
            categoryName: "公告",
            title: "6月2日全服不停机",
            date: "06/01"
          }))
        }
      ]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false);
  }
};
</script>
<style lang="scss">
@import "../assets/scss/variables";
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}

.nav-icons {
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
  }
}
</style>