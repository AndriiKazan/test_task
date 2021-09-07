<template>
  <div>
    <appTitle v-bind:appTitle="appTitle"></appTitle>

    <div class="content">
      <router-link to="/">
        <button>To users list</button>
      </router-link>

      <div class="userData">
        <div class="section">
          <div class="row">
            <div>Id:</div>
            <div class="data">{{userInfo.id}}</div>
          </div>
          <div class="row">
            <div>Name:</div>
            <div class="data">{{userInfo.name}}</div>
          </div>
          <div class="row">
            <div>Username:</div>
            <div class="data">{{userInfo.username}}</div>
          </div>
          <div class="row">
            <div>Phone:</div>
            <div class="data">{{userInfo.phone}}</div>
          </div>
        </div>
        <div class="section">
          <div class="row">
            <div>Website:</div>
            <div class="data">{{userInfo.website}}</div>
          </div>
          <div class="row">
            <div>Email:</div>
            <div class="data">{{userInfo.email}}</div>
          </div>
          <div class="row">
            <div>Company:</div>
            <div class="data">{{userInfo.company}}</div>
          </div>
          <div class="row">
            <div>Address:</div>
            <div class="data">{{userInfo.address}}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import appTitle from "@/components/common/appTitle";
import {mapGetters} from 'vuex'

export default {
  name: "userInfo",
  computed: mapGetters(['users']),
  components: {appTitle},
  mounted() {
    this.userInfo = this.users.find(user => user.id == this.$route.params.id);
    this.userInfo.company = this.userInfo.company.name;
    this.userInfo.address = this.userInfo.address.city + ", " + this.userInfo.address.street + ", " + this.userInfo.address.suite;
  },
  data(){
    return{
      userInfo:{},
      appTitle: "User information"
    }
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
    background: none;
    border: 1px solid #313131;
    color: white;
    cursor: pointer;
    letter-spacing: 2px;
  }
  button:hover{
    background-color: #353535;
  }

  .userData{
    width: 750px;
    color: #dadada;
    display: flex;
    font-size: 22px;
    margin-top: 20px;
    padding: 10px;
    border-radius: 4px;
    background-color: #292929;
  }
  .section{
    width: 375px;
  }

  .row{
    display: flex;
    margin-bottom: 20px;
  }

  .data{
    margin-left: 10px;
  }
</style>