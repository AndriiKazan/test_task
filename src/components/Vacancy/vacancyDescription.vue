<template>
  <div class="vacancyDetail">
    <div ref="description" class="description">
      <div class="title">Description</div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props:['description'],
  name: "vacancyDescription",
  computed: mapGetters(['vacancyById']),
  beforeUpdate() {
    this.$refs.description.innerHTML += this.vacancyById.descr;
  }
}
</script>

<style scoped>
*, span span, p span, h1{
  color: #dadada !important;
  font-size: 17px;
}
.description{
  color: #dadada;
  width: 750px;
  background-color: #1d1d1d;
  border: 1px solid #313131;
  padding: 30px 10px 20px 10px;
  border-top: none;
}
.title{
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
</style>