import Users from "@/components/Users/users";
import userInfo from "@/components/Users/userInfo";
export default [
    {
        path: '/',
        name: 'Users',
        component: Users
    },
    {
        path: '/userInfo/:id',
        name: 'userInfo',
        component: userInfo
    }
]