<template>
    <div>
      <vacancyMainInfo :vacancy="vacancy" :is-full-visible="false"></vacancyMainInfo>
    </div>
</template>


<script>
import vacancyMainInfo from "@/components/Vacancy/vacancyMainInfo";
export default {
  props:["vacancy"],
  name: "vacancyListItem",
  components:{vacancyMainInfo}
}
</script>

<style scoped>
  .vacancy{
    margin-top: 30px;
    width: 600px;
    color: #dadada;
    border: 2px solid #313131;
    border-radius: 4px;
    padding: 10px;
    display: flex;
    font-size: 20px;
    cursor: pointer;
    background-color: #1d1d1d;
  }
  .vacancy:hover{
    background-color: #353535;
    color: #f1f1f1;
  }

</style>