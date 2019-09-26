import React from 'react';
import {googleClientId} from '../resources/clientId';

class GoogleAuth extends React.Component{
    
    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId:googleClientId,
                scope:'email'
            });
        });
    }
    
    render(){
        return <div>Google Auth</div>;
    }
}

export default GoogleAuth;