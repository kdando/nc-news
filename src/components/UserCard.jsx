//React and Router part
import { useContext } from "react";

//Context
import { CurrentUserContext } from "./CurrentUser";

export default function UserCard ({ user }) {

    //CONTEXT
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext)

    const currentUsername = currentUser.username

    const {
        username,
        name,
        avatar_url
    } = user

    //HANDLE CLICK TO SWITCH USER
    const handleUserSwitch = (event) => {
        setCurrentUser(user);
    }

    return (
        username !== currentUsername ? (
            <div className="media" onClick={handleUserSwitch}>
                <p className="media-content media-left">{username}</p>
                <p className="media-right is-32x32">
                    <img src={avatar_url} alt={username} />
                </p>
            </div>
        ) : null
    );
    
    
    
   

}