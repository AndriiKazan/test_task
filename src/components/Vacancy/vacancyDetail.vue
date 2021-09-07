<template>
  <div>
    <appTitle v-bind:appTitle="appTitle"></appTitle>

    <div class="content">
      <router-link :to="{name:'allVacancy'}">
        <button>To users list</button>
      </router-link>

      <div class="vacancy">
        <div class="section">
          <div class="row">
            <div>Position:</div>
            <div class="data">{{vacancyById.position}}</div>
          </div>
          <div class="row" v-if="vacancyById.employmentType">
            <div>Employment type:</div>
            <div class="data">{{vacancyById.employmentType}}</div>
          </div>
          <div class="row" v-if="vacancyById.status">
            <div>Status:</div>
            <div class="data">{{vacancyById.status}}</div>
          </div>
          <div class="row" v-if="vacancyById.experience">
            <div>Experience:</div>
            <div class="data">{{vacancyById.experience}}</div>
          </div>
          <div class="row" v-if="vacancyById.clientName">
            <div>Client name:</div>
            <div class="data">{{vacancyById.clientName}}</div>
          </div>
          <div class="row" v-if="vacancyById.languages">
            <div>Languages:</div>
            <ul class="data">
              <li v-for="item in vacancyById.languages">{{item.name + " " + item.level}}</li>
            </ul>
          </div>
        </div>

        <div class="section">
          <div class="row" v-if="vacancyById.role">
            <div>Role:</div>
            <div class="data">{{vacancyById.role}}</div>
          </div>
          <div class="row" v-if="vacancyById.salaryFrom">
            <div>Salary from:</div>
            <div class="data">{{vacancyById.salaryFrom}}</div>
          </div>
          <div class="row" v-if="vacancyById.salaryTo">
            <div>Salary to:</div>
            <div class="data">{{vacancyById.salaryTo}}</div>
          </div>
          <div class="row" v-if="vacancyById.currency">
            <div>currency:</div>
            <div class="data">{{vacancyById.currency}}</div>
          </div>
          <div class="row" v-if="vacancyById.desiredSkills">
            <div>Desired skills:</div>
            <ul class="data">
              <li v-for="item in vacancyById.desiredSkills">
                {{item.skill + " " + item.experience}}
                <span v-if="item.mustHave" class="mustHave">*</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <vacancyDescription v-bind:description="vacancyById.descr"></vacancyDescription>
    </div>

  </div>
</template>
<!--position, employmentType, status, experience, role, salaryFrom, salaryTo, currency, descr, languages, clientName, desiredSkills-->
<script>
import appTitle from "@/components/common/appTitle";
import vacancyDescription from "@/components/Vacancy/vacancyDescription";
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: "vacancyDetail",
  computed: mapGetters(['vacancyById']),
  components: {appTitle,vacancyDescription},
  created() {
    this.getVacancyById(this.url + this.$route.params.id);
  },
  beforeUnmount() {
    this.deleteVacancyById();
    console.log("hi");
  },
  data(){
    return{
      url:"http://134.249.157.192/api/cleverstaff.net/hr/public/getVacancy?host=&id=",
      appTitle: "Vacancy detail"
    }
  },
  methods:{
    ...mapActions(['getVacancyById']),
    ...mapMutations(['deleteVacancyById'])
  }
}
</script>

<style scoped>
  .content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 0 30px 0;
  }

  button{
    margin: 30px;
    width: 300px;
    height: 40px;
    font-size: 20px;
    background-color: #1d1d1d;
    border: 1px solid #313131;
    color: white;
    cursor: pointer;
    letter-spacing: 2px;
    position: fixed;
    top: 65px;
    left: 10px;
  }
  button:hover{
    background-color: #353535;
  }

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