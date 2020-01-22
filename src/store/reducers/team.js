

const initState = {
    teams:[],
    error: false,
    loading: false
}

const getTeamsStart = (state) => {
    console.log("[reducer getTeamsStart]");
    return {
        ...state,
        loading: true,
        error: false
    }
}

const getTeamsSuccess = (state, action) => {
    console.log("[reducer getTeamsSuccess]", state, action);
    const data = action.data.data;
    state.teams.push(data);
    return {
        ...state,
        loading: false,
        error: false
    }
}
const getTeamsFail = (state, action) => {
    console.log("[reducer getTeamsFail]", state, action);
    state.teams = action.data;
    return {
        ...state,
        loading: false,
        error: true
    }
}


const reducer = (state = initState, action) => {
    console.log("[reducer reducer]", action);
    switch(action.type){
        case 'GET_TEAMS_START' : return getTeamsStart(state);
        case 'GET_TEAMS_FAIL' : return getTeamsFail(state, action);
        case 'GET_TEAMS_SUCCESS' : return getTeamsSuccess(state, action);
        default:
            return state;
    }
}

export default reducer;