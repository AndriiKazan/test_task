<template>
  <router-link :to="{name: 'vacancyDetail', params:{id:vacancy.localId}}">
    <div class="vacancy">
      <div class="section">
        <div class="row">
          <div>Position:</div>
          <div class="data">{{vacancy.position}}</div>
        </div>
        <div class="row" v-if="vacancy.employmentType">
          <div>Employment type:</div>
          <div class="data">{{vacancy.employmentType}}</div>
        </div>
        <div class="row" v-if="vacancy.status">
          <div>Status:</div>
          <div class="data">{{vacancy.status}}</div>
        </div>
        <div class="row" v-if="vacancy.experience">
          <div>Experience:</div>
          <div class="data">{{vacancy.experience}}</div>
        </div>
      </div>

      <div class="section">
        <div class="row" v-if="vacancy.role">
          <div>Role:</div>
          <div class="data">{{vacancy.role}}</div>
        </div>
        <div class="row" v-if="vacancy.salaryFrom">
          <div>Salary from:</div>
          <div class="data">{{vacancy.salaryFrom}}</div>
        </div>
        <div class="row" v-if="vacancy.salaryTo">
          <div>Salary to:</div>
          <div class="data">{{vacancy.salaryTo}}</div>
        </div>
        <div class="row" v-if="vacancy.currency">
          <div>currency:</div>
          <div class="data">{{vacancy.currency}}</div>
        </div>
      </div>
    </div>
  </router-link>
</template>


<script>
export default {
  props:["vacancy"],
  name: "vacancyListItem"
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

  .section{
    width: 400px;
  }
  .section:nth-child(2){
    width: 200px;
    padding-left: 20px;
  }
  .row{
    display: flex;
  }
  .section .row{
    margin-bottom: 10px;
  }
  .data{
    margin-left: 10px;
  }
</style>