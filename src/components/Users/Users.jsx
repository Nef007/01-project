import React from 'react'
import styles from "./users.module.css";
import noavatar from "../../assets/images/noavatar.jpeg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

;

let Users = (props) => {


    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectPage}
                             onClick={(e) => {
                                 props.onPageChanges(p)
                             }}> {p} </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}><img src={u.photos.small != null ? u.photos.small : noavatar}
                                                              className={styles.usersPhoto}/></NavLink>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {


                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {
                                        withCredentials: true,
                                        headers: {"API-KEY": "315484d9-d1e1-43bd-9fc8-372f870c219f"}
                                    }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)

                                    }


                                });


                            }}>Unfollow</button>
                            : <button onClick={() => {


                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {"API-KEY": "315484d9-d1e1-43bd-9fc8-372f870c219f"}
                                }).then(response => {

                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)

                                    }


                                });


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