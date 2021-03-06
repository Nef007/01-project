import React from 'react'
import styles from "./Users.module.css";
import noavatar from "../../assets/images/noavatar.jpeg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {userAPI} from "../../api/api";
import Paginator from "../common/Paginator/Paginator";

;

let Users = (props) => {


    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <div>
        <div>
          <Paginator currentPage={props.currentPage} onPageChanges={props.onPageChanges}
            totalItemsCount={props.totalUserCount} pageSize={props.pageSize} />
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}><img src={u.photos.small != null ? u.photos.small : noavatar}
                                                              className={styles.usersPhoto}/></NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)

                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)


        }  </div>


}

export default Users;