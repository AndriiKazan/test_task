<template>
  <div>{{appTitle}}</div>
</template>

<script>
export default {
  props:["appTitle"],
  name: "appTitle"
}
</script>

<style scoped>
  div{
    padding: 30px 0 30px 0;
    font-size: 30px;
    color: white;
    text-align: center;
    letter-spacing: 1.5px;
    background-color: #1d1d1d;
    border-bottom: 2px solid #292929;
  }
</style>