
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

function PrivateRoute({ component: Component, ...rest }) {

    var verified = false
    let token = window.localStorage.getItem('auth')

    console.log('window: ', window.location.pathname)

    console.log('token: ', token)


    if (!token) {
        console.log('Ivalid Authentication Token')
    } else {
        axios.get(process.env.REACT_APP_VERIFY, { headers: { Authorization: token } })
            .then(res => {
                console.log('IsVerified Response: ', res)
            })
            .catch(err => {
                console.log('Error: ', err)
            })
        verified = true
    }



    console.log('auth check: ', verified)

    return (
        <Route
            {...rest}
            render={
                (props) => (
                    verified
                        ? (
                            <Component {...props} />
                        ) : (
                            <Redirect
                                to={{
                                    pathname: '/unauthorized',
                                }}
                            />
                        ))
            }
        />
    );
}

export default PrivateRoute;