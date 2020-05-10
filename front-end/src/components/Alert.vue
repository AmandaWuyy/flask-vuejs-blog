<template>
  <div class="alert" role="alert" v-bind:class="'alert-' + variant">
    {{ message }}
  </div>
</template>

<script>
export default {
    props: ['variant', 'message']    // 子组件 Alert.vue 可以接收父组件Home传递的 variant 和 message 数据
                                     // 谁import它了谁就是它的父组件
}
</script>