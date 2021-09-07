import axios from 'axios'

export default {
    actions:{
        getUsers(ctx, url){
            axios
                .get(url)
                .then(function (response){
                    ctx.commit("saveUsers", response.data);
                })
                .catch(error => (console.error("Something wrong!!!")))
        },
    },
    mutations:{
        saveUsers(state, data){
            state.users = data;
        }
    },
    state:{
        users:[]
    },
    getters:{
        users(state){
            return state.users;
        }
    }
}