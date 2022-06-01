// HOC, component that render another component
// higher order component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private, Shihhh</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (CheckAuth) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? <CheckAuth {...props} isAdmin={true}/> : <p>Please login to see the secret info</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

//ReactDOM.render(<AdminInfo isAdmin={true} info="This is CS50!" />, document.getElementById("appRoot"))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is CS50!" />, document.getElementById("appRoot"))