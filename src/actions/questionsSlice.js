import { createSlice } from "@reduxjs/toolkit";
import { _getQuestions, _saveQuestionAnswer } from "../_DATA";

const questionsSlice = createSlice({
    name: "questions",
    initialState: {},
    reducers: {
        setQuestions: (state, action) => {
            return action.payload;
        },
        createQuestion: (state, action) => {
            const { payload: newQuestion } = action;
            state[newQuestion.id] = newQuestion;
        },
        saveAnswer: (state, action) => {
            const { authedUser, qid, answer } = action.payload;
            state[qid][answer].votes.push(authedUser);
        },
    },
});

// Thunk for fetching questions asynchronously
export const getQuestions = () => async (dispatch) => {
    try {
        console.log("Fetching questions");
        const questionData = await _getQuestions();
        dispatch(setQuestions(questionData)); // Dispatch the action to update the state
    } catch (error) {
        console.error("Error fetching questions:", error);
    }
};

export const saveQuestionAnswer =
    ({ authedUser, qid, answer }) =>
        async (dispatch) => {
            try {
                console.log("Saving answer");
                await _saveQuestionAnswer({ authedUser, qid, answer });
                dispatch(saveAnswer({ authedUser, qid, answer }));
            } catch (error) {
                console.error("Error saving answer:", error);
            }
        };

export const { setQuestions, createQuestion, saveAnswer } =
    questionsSlice.actions;
export default questionsSlice.reducer;
