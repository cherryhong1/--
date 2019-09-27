const state ={
    nm:'北京',
    id:1,
};
const actions={

}
const mutations ={
    CTIY_INF0(state,payload){
        state.nm =payload.nm;
        state.id =payload.id;
    }
}
export default{
    namespace:true,
    state,
    actions,
    mutations

}