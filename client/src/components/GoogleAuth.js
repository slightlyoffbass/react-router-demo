import React from 'react';
import {googleClientId} from '../resources/clientId';

class GoogleAuth extends React.Component{

    state = {isSignedIn:null};
    
    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId:googleClientId,
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    
    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return ( <button className="ui loading button">
                        Loading
                    </button> );
        }else if(this.state.isSignedIn){
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

export default GoogleAuth;