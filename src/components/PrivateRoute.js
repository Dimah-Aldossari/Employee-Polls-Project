import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
    const loggedIn = useSelector((state) => state.authSlice.isAuthenticated);
    const redirectUrl = window.location.href.toString().split(window.location.host)[1];

    return loggedIn ? children : <Navigate to={`/login?redirectTo=${redirectUrl}`} />;
}

export default PrivateRoute;
