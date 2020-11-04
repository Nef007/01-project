import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";



const Navbar = (props) => {

    let friends = props.state.friends.map ( i => <div className={s.friendsIcon}><img src={i.icon}/></div> )

    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
        </div>
        <div className={s.item +' '+ s.friends}>
            <div>Friends</div>
            <div>
                {friends}
            </div>

        </div>
    </nav>

}

export default Navbar;