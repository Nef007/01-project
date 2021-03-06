import "./App.css";
import React from 'react'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {getAuthUserData} from "./redux/auth-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import {withSuspense} from "./hoc/withSuspens";

const DialogsContainer = React.lazy( ()=> import ("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy( ()=> import ("./components/Profile/ProfileContainer"));


class App extends Component {
        catchAllUnhandleErrors =(promiseRejectionEvent) => {
            alert("Some error occured")
        }

    componentDidMount() {

        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors);
    }

    componentWillMount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandleErrors);
    }

    render() {

        if(!this.props.initialized){
            return <Preloader />

        }

        return (



            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Route path={'/dialogs'} render={ withSuspense(DialogsContainer)} />


                    <Route path={'/profile/:userId?'} render={withSuspense(ProfileContainer)}/>



                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                </div>

            </div>

        );
    }
}

const mapStateToProps =(state) => ({
    initialized: state.app.initialized
})




export default compose ( withRouter,
    connect (mapStateToProps, {initializeApp}))(App);
