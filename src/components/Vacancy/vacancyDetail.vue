<template>
  <div>
    <appTitle v-bind:appTitle="appTitle"></appTitle>

    <div class="content">
      <router-link :to="{name:'allVacancy'}">
        <button>To users list</button>
      </router-link>

      <vacancyMainInfo v-bind:vacancy="vacancyById" :is-full-visible="true"></vacancyMainInfo>

      <vacancyDescription v-bind:description="vacancyById.descr"></vacancyDescription>
    </div>

  </div>
</template>
<!--position, employmentType, status, experience, role, salaryFrom, salaryTo, currency, descr, languages, clientName, desiredSkills-->
<script>
import appTitle from "@/components/common/appTitle";
import vacancyDescription from "@/components/Vacancy/vacancyDescription";
import vacancyMainInfo from "@/components/Vacancy/vacancyMainInfo";
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: "vacancyDetail",
  computed: mapGetters(['vacancyById']),
  components: {appTitle,vacancyDescription,vacancyMainInfo},
  created() {
    this.getVacancyById(this.url + this.$route.params.id);
  },
  beforeUnmount() {
    this.deleteVacancyById();
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

</style>