import React from "react";
import Profile from "./Profile";

import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter, Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Dialogs from "../Dialogs/Dialogs";
import {compose} from "redux";





class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push("/login")
            }
        }
            this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>

        )

    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId


});

export default compose(connect ( mapStateToProps, { getUserProfile, getStatus, updateStatus } ),
    withRouter,
    // withAuthRedirect
)
(ProfileContainer);

