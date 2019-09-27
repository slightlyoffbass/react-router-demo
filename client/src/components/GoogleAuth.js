import React from 'react';
import { connect } from 'react-redux';

import {googleClientId} from '../resources/clientId';
import { signIn,  signOut } from '../actions';

class GoogleAuth extends React.Component{
   
    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId:googleClientId,
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    
    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn();
        }else{
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return ( <button className="ui loading button">
                        Loading
                    </button> );
        }else if(this.props.isSignedIn){
            return (<button onClick={this.onSignOutClick} className="ui google plus button">
                        <i className="google plus icon"></i>
                        Sign out
                    </button>);
        }else{
            return ( <button onClick={this.onSignInClick} className="ui google plus button">
                        <i className="google plus icon"></i>
                        Sign in
                    </button>);
        }
    }

    render(){
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
    mapStateToProps,
    {signIn,signOut}
    )(GoogleAuth);