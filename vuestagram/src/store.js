import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            like: 0,
            likecheck: 0
        }
    },
    mutations : {        
        like(state){
            if(state.likecheck==0) {
                state.like++
                state.likecheck = 1
            }
            else {
                state.like--
                state.likecheck = 0
            }
        }
    },
    
})

export default store
