import { useContext } from "react";
import { CurrentUserContext } from "./CurrentUser";

export default function Header () {

    //grabbing context
    const { currentUser } = useContext(CurrentUserContext)
    const userFirstName = currentUser.name.split(" ")[0];

    return <p>Welcome back, {userFirstName}!</p>
    
    
}