// actions/shared.js

import { setUsers } from "./usersSlice";
import { setQuestions } from "./questionsSlice";
import { getInitialData } from "../api";

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({ users, questions }) => {
            dispatch(setUsers(users));        // Corrected usage
            dispatch(setQuestions(questions)); // Corrected usage
        });
    };
}
