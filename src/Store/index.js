import { combineReducers } from 'redux'

const dataInitialState = {}
export const data = (state = dataInitialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}


const rootReducer = combineReducers({
    data
})

export default rootReducer;