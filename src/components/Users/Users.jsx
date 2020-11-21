import React from 'react'
import styles from './users.module.css'

let Users = (props) => {


if (props.users.length === 0) {
    debugger;
    props.setUsers([
        {
            id: 1,
            photoUrl: 'https://www.sostav.ru/app/public/images/news/2017/08/21/compressed/Dmitrij.jpg',
            followed: true,
            fullname: 'Dmitry',
            status: 'i am bose',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://www.sostav.ru/app/public/images/news/2017/08/21/compressed/Dmitrij.jpg',
            followed: false,
            fullname: 'Sasha',
            status: 'i am bose1',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'https://www.sostav.ru/app/public/images/news/2017/08/21/compressed/Dmitrij.jpg',
            followed: true,
            fullname: 'Vlad',
            status: 'i am bose2',
            location: {city: 'Kiev', country: 'Ukraine'}
        }
    ])
}
debugger;
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.usersPhoto} />
                    </div>
                    <div>
                        {u.followed ? <button onClick={ () => { props.unfollow(u.id)}} >Unfollow</button>
                            : <button onClick={ () => { props.follow(u.id)}}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)


        }  </div>
}

export default Users;