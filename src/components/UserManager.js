import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { _getUsers, _saveQuestion } from '../_DATA';
import { login, logout } from '../actions/Creat_Users';
import { createQuestion } from '../actions/questionsSlice';
import { useNavigate } from "react-router-dom";

const UserManager = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.authSlice.isAuthenticated);

    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        password: '',
    });


    const handleLogin = async () => {
        try {
            const users = await _getUsers();
            const { username, password } = user;

            if (users[username] && users[username].password === password) {

                dispatch(login(users[username]));
            } else {
                console.log('Invalid username or password');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    const handleCreateQuestion = async () => {
        try {
            const { username } = user;
            const newQuestion = await _saveQuestion({
                optionOneText: 'Option One',
                optionTwoText: 'Option Two',
                author: username,
            });

            dispatch(createQuestion(newQuestion));
            console.log('New question created:', newQuestion);

            navigate('/addQuestion');
        } catch (error) {
            console.error('Error creating question:', error);
        }
    };

    return (
        <div>
            {isAuthenticated ? (
                <>

                    <button onClick={handleLogout}  >Logout</button>
                    <button onClick={handleCreateQuestion}>Create Question</button>
                </>
            ) : (
                <>
                    <label>
                        Username:
                        <input
                            data-testid="username"
                            type="text"
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            data-testid="password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </label>
                    <button onClick={handleLogin} data-testid="submit" type="button">
                        Login
                    </button>                </>
            )}
        </div>
    );
};

export default UserManager;
