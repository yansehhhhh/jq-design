<template>
  <div class="jq-button" :class="classes" :disabled="props.disabled">
    <!-- <span></span> -->
    <slot></slot>
  </div>
</template>
<script lang="ts" setup name="jq-button">
import { computed } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  size: {
    type: String,
    default: "middle",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  transparent: {
    type: Boolean,
    default: false,
  },
  text: {
    type: Boolean,
    default: false,
  },
});
const { type, size, disabled, round, circle, transparent, text } = props;
const classes = computed(() => {
  return {
    [`jq-button-${type}`]: type,
    [`jq-button-${size}`]: size,
    [`jq-button-disabled`]: disabled,
    [`jq-button-round`]: round,
    [`jq-button-circle`]: circle,
    [`jq-button-transparent`]: transparent,
    [`jq-button-text`]: text,
  };
});
</script>
<script lang="ts">
export default {
  name: "jqButton",
};
</script>
<style scoped lang="less">
.jq-button {
  box-sizing: border-box;
  padding: 4px 12px;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;
  display: inline-flex;
  border-radius: 3px;
  &.jq-button-default {
    background-color: #fff;
    border: 1px solid #3773da;
    color: #333;
  }
  &.jq-button-primary {
    background-color: #3773da;
    border: 1px solid #3773da;
    color: #fff;
  }
  &.jq-button-success {
    background-color: #2da641;
    border: 1px solid #2da641;
    color: #fff;
  }
  &.jq-button-warning {
    background-color: #ed6a0c;
    border: 1px solid #ed6a0c;
    color: #fff;
  }
  &.jq-button-info {
    background-color: #969799;
    border: 1px solid #969799;
    color: #fff;
  }
  &.jq-button-danger {
    background-color: #d40000;
    border: 1px solid #d40000;
    color: #fff;
  }
  &.jq-button-small {
    padding: 3px 10px;
    font-size: 14px;
    &.jq-button-circle {
      width: 25px;
      height: 25px;
      line-height: 25px;
    }
  }
  &.jq-button-big {
    padding: 5px 14px;
    font-size: 18px;
    &.jq-button-circle {
      width: 35px;
      height: 35px;
      line-height: 35px;
    }
  }
  &.jq-button-middle.jq-button-circle {
    width: 30px;
    height: 30px;
    line-height: 30px;
  }
  &.jq-button-big &.jq-button-disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  &.jq-button-round {
    border-radius: 14px;
  }
  &.jq-button-circle {
    border-radius: 50%;
    display: inline-block;
    padding: 0;
  }
  &:hover {
    opacity: 0.6;
  }
  & + .jq-button {
    margin-left: 10px;
  }
}
</style>
