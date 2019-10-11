export default {
    path:'/movie',
    name: 'Movie',
    component : () => import('@/views/movie'),
    children:[{
        path:'city',
        name:'City',
        component: ()=> import('@/components/City')
    },{
        path:'playing',
        name:'Playing',
        component: ()=> import('@/components/Playing')
    },{
        path:'coming',
        name:'Coming',
        component: ()=> import('@/components/Coming')
    },{
        path:'search',
        name:'Search',
        component: ()=> import('@/components/Search')
    },{
        path:'detail',
        components:{
            detail:()=>import('@/views/movie/detail.vue')
        }
    },{
        path:'/movie',
        redirect:'/movie/playing'
    }]

}