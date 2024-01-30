import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import UserManager from './UserManager';

const Login = ({ loggedIn }) => {
    const navigate = useNavigate();
    const [redirectUrl] = useState(null);


    if (loggedIn) {
        navigate(redirectUrl || '/Home');
    }

    return (
        <div>
            {/* Your login form or UserManager component */}
            {/* <button onClick={handleLogin}>Login</button> */}
        </div>
    );
};

export default Login;
