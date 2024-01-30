import { useSelector } from "react-redux";

const Leaderboard = () => {
    const users = useSelector((state) => state.users);


    const sortedUsers = Object.values(users).sort(
        (a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length
    );
    return (
        <div className="leaderboard">
            <h2>Leaderboard</h2>
            <div className="leaderboard-list">
                {sortedUsers.map((user) => (
                    <li key={user.id} className="leaderboard-item">
                        <div className="user-info">
                            <img src={user.avatarURL} alt={user.name} className="user-avatar" />
                            <span className="user-name">{user.name}</span>
                        </div>
                        <div className="user-stats">
                            <p>Answered questions: {Object.keys(user.answers).length}</p>
                            <p>Created questions: {user.questions.length}</p>
                        </div>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default Leaderboard;
