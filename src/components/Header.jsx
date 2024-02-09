//React and Router part
import { useContext } from "react";

//Context
import { CurrentUserContext } from "./CurrentUser";


export default function Header () {


    //CONTEXT
    const { currentUser } = useContext(CurrentUserContext)
    const userFirstName = currentUser.name.split(" ")[0];

    return <p>Welcome back, {userFirstName}!</p>
    
}