<template>
  <div>
    <appTitle v-bind:appTitle="title"></appTitle>
    <div class="content">
      <userListItem v-for="user in users" v-bind:user="user" :key="user.id"></userListItem>
    </div>
  </div>
</template>

<script>
import appTitle from "@/components/common/appTitle";
import userListItem from "@/components/Users/userListItem";
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "Vacancy",
  components:{appTitle,userListItem},
  computed: mapGetters(['users']),
  mounted() {
    this.getUsers(this.url);
  },
  data(){
    return{
      title: "Users list",
      url: "https://jsonplaceholder.typicode.com/users"
    }
  },
  methods:{
    ...mapActions(['getUsers'])
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