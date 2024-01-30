import { useDispatch } from "react-redux";
import { saveQuestionAnswer } from "../actions/questionsSlice";

const QuestionCard = ({ question, users, currentUser }) => {
    const dispatch = useDispatch();
    const userVote = users[currentUser]?.answers[question.id];

    const handleVote = (answer) => {
        if (!userVote) {
            dispatch(
                saveQuestionAnswer({
                    authedUser: currentUser,
                    qid: question.id,
                    answer,
                })
            );
        }
    };

    const getOptionClassName = (option) => {
        return `option ${userVote === option ? "voted" : ""}`;
    };

    return (
        <div className="question-card">
            <img
                src={users[question.author]?.avatarURL}
                alt={users[question.author]?.name}
                className="avatar"
            />

            <h3>Question by {users[question.author]?.name}</h3>
            <p>Date: {new Date(question.timestamp).toLocaleDateString()}</p>

            <div
                className={getOptionClassName("optionOne")}
                onClick={() => handleVote("optionOne")}
            >
                {question.optionOne.text}
            </div>
            <div
                className={getOptionClassName("optionTwo")}
                onClick={() => handleVote("optionTwo")}
            >
                {question.optionTwo.text}
            </div>
        </div>
    );
};

export default QuestionCard;
