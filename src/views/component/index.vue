<template>
  <div class="component">
    <aside>
      <template v-for="item in componentList" :key="item.name">
        <router-link :to="item.path">
          {{ item.name }} {{ item.desc }}
        </router-link>
      </template>
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>
<script lang="ts" setup name="component">
import { reactive, onMounted, ref } from "vue";
const state = reactive({});
const componentList = ref([
  {
    name: "Button",
    desc: "按钮",
    path: "/component/button",
  },
  {
    name: "Avatar",
    desc: "头像",
    path: "/component/avatar",
  },
]);
</script>
<style scoped lang="less">
@deep: ~":deep()";
.component {
  padding-top: 20px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  aside {
    width: 200px;
    display: flex;
    flex-direction: column;
    a {
      padding: 5px;
      text-indent: 20px;
      margin-bottom: 5px;
      &:hover {
        color: #91d5ff;
      }
    }
    .router-link-active {
      background-color: #e6f7ff;
      color: #91d5ff;
    }
  }
  main {
    flex-grow: 1;
    margin-left: 10px;
  }
}
</style>
