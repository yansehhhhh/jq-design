<template>
  <div class="top-nav">
    <div class="top-nav-wrap">
      <div class="top-nav-logo">
        <img :src="IMG_logo" alt="logo" />
        <span>jq-design</span>
      </div>
      <div class="top-nav-item">
        <template v-for="item in routerList" :key="item.name">
          <router-link v-if="item.meta.show" :to="item.path">{{
            item.meta.title
          }}</router-link>
        </template>
        <a href="https://github.com/yansehhhhh/jq-design" target="_blank"
          >GitHub</a
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup name="topNav">
import { onMounted, ref } from "vue";
import IMG_logo from "/@assets/images/logo.jpg";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const routerList = ref(router.options.routes);
// const active
onMounted(() => {
  console.log(route);
  console.log(routerList);
});
</script>
<style scoped lang="less">
@deep: ~":deep()";
.top-nav {
  height: 50px;
  line-height: 50px;

  border-bottom: 1px solid #ebedf0;
  .top-nav-wrap {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .top-nav-logo {
      display: flex;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      span {
        margin-left: 10px;
      }
    }
    .top-nav-item {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      a {
        color: #000;
        padding: 0 10px;
        border-bottom: 1px solid #ebedf0;
        &:hover {
          color: #3773da;
        }
      }
      .router-link-active {
        border-bottom: 1px solid #3773da;
      }
    }
  }
}
</style>
