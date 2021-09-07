import axios from 'axios'

export default {
    actions:{
        getAllVacancy(ctx, url){
            axios
                .get(url)
                .then(function (response){
                    ctx.commit("saveAllVacancy", response.data.objects);
                })
                .catch(error => (console.error("Something wrong!!!")))
        },
        getVacancyById(ctx, url){
            axios
                .get(url)
                .then(function (response){
                    ctx.commit("saveVacancyById", response.data.object);
                })
                .catch(error => (console.error("Something wrong!!!")))
        }
    },
    mutations:{
        saveAllVacancy(state, data){
            state.allVacancy = data;
        },
        saveVacancyById(state, data){
            state.vacancyById = data;
        },
        deleteVacancyById(state){
            state.vacancyById = {};
        }
    },
    state:{
        allVacancy:[],
        vacancyById: {}
    },
    getters:{
        allVacancy(state){
            return state.allVacancy;
        },
        vacancyById(state){
            return state.vacancyById;
        }
    }
}