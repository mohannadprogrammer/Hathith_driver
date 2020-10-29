import { combineReducers } from 'redux'

const dataInitialState = {
    user: "mohannad"
}
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