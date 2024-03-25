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
            <div className="media mb-4 mt-4" onClick={handleUserSwitch}>
                <strong className="media-content media-left">{username}</strong>
                <figure className="media-right image is-64x64">
                    <img src={avatar_url} alt={username} />
                </figure>
            </div>
        ) : null
    );

}