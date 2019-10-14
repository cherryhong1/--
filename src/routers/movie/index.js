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
        path:'detail/1/:id',
        components:{
             default:()=>import('@/components/Playing'),
            detail:()=>import('@/views/movie/detail.vue')
        },
        props:{
            detail:true
        }
    },{
        path:'detail/2/:id',
        components:{
            default:()=>import('@/components/Coming'),
            detail:()=>import('@/views/movie/detail.vue')
        },
        props:{
            detail:true
        }
    },
    {
        path:'/movie',
        redirect:'/movie/playing'
    }]

}