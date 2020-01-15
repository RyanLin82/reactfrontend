
const initState = {
    name: 'Ryan',
    salary: 22
}
const reducer = (state = initState, action) => {
    console.log("[calculateSalary reducer]", state, action);
    switch (action.type) {
        case "ADD_SALARY" : 
        return ({
            ...state,
            salary: state.salary + 1
        });
        default: return state
    }
} 

export default reducer;


//step1 
// const reducer = (state = 0, action) => {
//     console.log("[calculateSalary reducer]", state, action);
//     switch (action.type) {
//         case "ADD_SALARY" : return state +1;
//         default: return state
//     }  
// }

// export default reducer;



// step2 use const to init state. 
// const initState = 22;
// const reducer = (state = initState, action) => {


// step3 const initState becomes object
// const initState = {
//     name: 'Ryan',
//     salary: 22
// }

// console.log("[calculateSalary reducer]", state, action);
// switch (action.type) {
//     case "ADD_SALARY" : 
//     return ({
//         ...state,
//         salary: state.salary + 1
//     });
//     default: return state
// } 