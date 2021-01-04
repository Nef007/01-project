import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import Preloader from "../components/common/preloader/Preloader";




export const withSuspense= (Component) => {


    return (props) => {

       return <React.Suspense
            fallback={<Preloader/>}> <Component {...props} />
            </React.Suspense>

                }
    }


