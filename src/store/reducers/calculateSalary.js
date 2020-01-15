import * as actions from '../actions/actionTypes'

const initState = {
    name: 'Ryan',
    salary: 22
}
const reducer = (state = initState, action) => {
    console.log("[calculateSalary reducer]", state, action);
    switch (action.type) {
        case actions.ADD_SALARY : 
        return ({
            ...state,
            salary: state.salary + 1
        });
        default: return state
    }
} 

export default reducer;


// console.log("[calculateSalary reducer]", state, action);
// switch (action.type) {
//     case "ADD_SALARY" : 
//     return ({
//         ...state,
//         salary: state.salary + 1
//     });
//     default: return state
// } 