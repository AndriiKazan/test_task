<template>
  <router-link :to="{name: 'userInfo', params:{id:user.id}}">
    <div class="user">
      <div class="section">
        <div class="row">
          <div>ID:</div>
          <div class="data">{{user.id}}</div>
        </div>
        <div class="row">
          <div>Name:</div>
          <div class="data">{{user.name}}</div>
        </div>
      </div>

      <div class="section">
        <div class="row">
          <div>Username:</div>
          <div class="data">{{user.username}}</div>
        </div>
        <div class="row">
          <div>Phone:</div>
          <div class="data">{{user.phone}}</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props:["user"],
  name: "userListItem"
}
</script>

<style scoped>
  .user{
    margin-top: 30px;
    width: 600px;
    color: #dadada;
    border: 2px solid #313131;
    border-radius: 4px;
    padding: 10px;
    display: flex;
    font-size: 20px;
    cursor: pointer;
  }
  .user:hover{
    background-color: #353535;
  }

  .section{
    width: 300px;
  }
  .row{
    display: flex;
  }
  .section .row:nth-child(2){
    margin-top: 10px;
  }
  .data{
    margin-left: 10px;
  }
</style>