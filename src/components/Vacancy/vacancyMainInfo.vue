<template>
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
      <div class="row" v-if="vacancy.experience && isFullVisible">
        <div>Experience:</div>
        <div class="data">{{vacancy.experience}}</div>
      </div>
      <div class="row" v-if="vacancy.clientName && isFullVisible">
        <div>Client name:</div>
        <div class="data">{{vacancy.clientName}}</div>
      </div>
      <div class="row" v-if="vacancy.languages && isFullVisible">
        <div>Languages:</div>
        <ul class="data">
          <li v-for="item in vacancy.languages">{{item.name + " " + item.level}}</li>
        </ul>
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
      <div class="row" v-if="vacancy.desiredSkills && isFullVisible">
        <div>Desired skills:</div>
        <ul class="data">
          <li v-for="item in vacancy.desiredSkills">
            {{item.skill + " " + item.experience}}
            <span v-if="item.mustHave" class="mustHave">*</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['vacancy', 'isFullVisible'],
  name: "vacancyMainInfo"
}
</script>

<style scoped>
.vacancy{
  margin-top: 30px;
  width: 750px;
  color: #dadada;
  border: 2px solid #313131;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  font-size: 20px;
  cursor: pointer;
  background-color: #1d1d1d;
}

.section{
  width: 350px;
}
.section:nth-child(2){
  width: 400px;
  padding-left: 20px;
}
.row{
  display: flex;
}
.row div:first-child{
  color: #5272ad;
}
.section .row{
  margin-bottom: 10px;
}
.data{
  margin-left: 10px;
}
.mustHave{
  color: #c32727;
}
</style>