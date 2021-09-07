import Vacancy from "@/components/Vacancy/Vacancy";
import vacancyDetail from "@/components/Vacancy/vacancyDetail";
export default [
    {
        path: '/',
        name: 'allVacancy',
        component: Vacancy
    },
    {
        path: '/vacancyDetail/:id',
        name: 'vacancyDetail',
        component: vacancyDetail
    }
]