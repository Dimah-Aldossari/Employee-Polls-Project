// LogoutButton.jsx
import { useDispatch } from 'react-redux';
import { logout } from '../actions/Creat_Users';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/')
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
