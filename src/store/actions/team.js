import axios from 'axios'


export const getTeamsStart = () => {
    return {
        type: "GET_TEAMS_START"
    }
}


export const getTeamsStartAxios = () => {
    axios.get('https://react-redux-59edc.firebaseio.com/teams/CM.json')
    .then(response => {
        console.log("[Temas actions getTeams response]", response);
        // getTeamsSuccess(response);
        return{
            type: "GET_TEAMS_SUCCESS",
            data: response
        }

    })
    .catch(error => {
        console.log("[Temas actions getTeams error]", error);
        return{
            type: "GET_TEAMS_FAIL",
            data: "test"
        }
    });

    // return{
    //     type: "GET_TEAMS_SUCCESS",
    //     data: "test2"
    // }
}


export const getTeamsFail = () => {
    return {
        type: "GET_TEAMS_FAIL"
    }
}

export const getTeamsSuccess = (data) => {
    return {
        type: "GET_TEAMS_SUCCESS",
        data: data
    }
}

export const getTeams = () => {

    return dispatch => {
        dispatch(getTeamsStart());
        axios.get('https://react-redux-59edc.firebaseio.com/teams/CM.json')
        .then(response => {
            console.log("[Temas actions getTeams response]", response);
            dispatch(getTeamsSuccess(response));
        })
        .catch(error => {
            console.log("[Temas actions getTeams error]", error);
            dispatch(getTeamsFail());
        });
    }
}