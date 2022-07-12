<template>
  <div class="button">
    <div class="title">Button按钮</div>
    <div class="sub">按钮类型</div>
    <jq-button>default</jq-button>
    <jq-button type="primary">primary</jq-button>
    <jq-button type="success">success</jq-button>
    <jq-button type="info">info</jq-button>
    <jq-button type="warning">warning</jq-button>
    <jq-button type="danger">danger</jq-button>
    <div class="sub">按钮大小</div>
    <jq-button type="primary" size="small">small</jq-button>
    <jq-button type="primary">primary</jq-button>
    <jq-button type="primary" size="big">big</jq-button>
    <div class="sub">按钮禁用</div>
    <jq-button disabled>default</jq-button>
    <jq-button disabled type="primary">primary</jq-button>
    <jq-button disabled type="success">success</jq-button>
    <jq-button disabled type="info">info</jq-button>
    <jq-button disabled type="warning">warning</jq-button>
    <jq-button disabled type="danger">danger</jq-button>
    <div class="sub">圆角按钮</div>
    <jq-button round>default</jq-button>
    <jq-button round type="primary">primary</jq-button>
    <jq-button round type="success">success</jq-button>
    <jq-button round type="info">info</jq-button>
    <jq-button round type="warning">warning</jq-button>
    <jq-button round type="danger">danger</jq-button>
    <div class="sub">圆型按钮</div>
    <jq-button circle type="primary" size="small">jq</jq-button>
    <jq-button circle type="success">jq</jq-button>
    <jq-button circle type="info" size="big">jq</jq-button>
  </div>
</template>
<script lang="ts" setup name="button">
import { reactive, onMounted } from "vue";
import jqButton from "@/lib/Button/index.vue";
const state = reactive({});
</script>
<style scoped lang="less">
@deep: ~":deep()";
</style>
