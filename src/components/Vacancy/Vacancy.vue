<template>
  <div>
    <appTitle v-bind:appTitle="title"></appTitle>
    <div class="content">
      <router-link :to="{name: 'vacancyDetail', params:{id:item.localId}}"
                   v-for="item in allVacancy" v-bind:vacancy="item" :key="item.orgId">
        <userListItem  v-bind:vacancy="item"></userListItem>
      </router-link>
    </div>
  </div>
</template>

<script>
import appTitle from "@/components/common/appTitle";
import userListItem from "@/components/Vacancy/vacancyListItem";
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "Vacancy",
  components:{appTitle,userListItem},
  computed: mapGetters(['allVacancy']),
  created() {
    this.getAllVacancy(this.url);
  },
  data(){
    return{
      title: "Vacancy list",
      url: "http://localhost:8080/hr/public/getVacancies?alias=staffingpartner"
      // url: "https://jsonplaceholder.typicode.com/users"
    }
  },
  methods:{
    ...mapActions(['getAllVacancy'])
  }
}
</script>

<style scoped>
  .content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
  }
</style>