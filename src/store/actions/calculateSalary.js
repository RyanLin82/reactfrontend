import * as actions from './actionTypes';

export const addSalary = () => {
    console.log("[actions addSalary]");
    return {
        type: actions.ADD_SALARY
    };
}