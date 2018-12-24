import {fromJS} from 'immutable'

const defaultState = fromJS({
    topicList: [{
        id:1,
        title: '社会热点',
        imgUrl:'//cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png'
    },{
        id:2,
        title: '手绘',
        imgUrl:'//cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png'
    }]
})

export default (state = defaultState,action) => {
    switch(action.type){

        default:
            return state
    }

}