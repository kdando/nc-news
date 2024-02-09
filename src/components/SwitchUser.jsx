//React and React Router parts
import { useEffect, useState, useContext } from "react";

//Context
import { CurrentUserContext } from "./CurrentUser";

//Util function
import { getUsers } from "../../utils/utils"

//Components
import UserList from "./UserList";
import Loading from "./Loading";

export default function SwitchUser ({ isLoading, setIsLoading }) {

    //CONTEXT
    const { currentUser } = useContext(CurrentUserContext)

    //STATES
    const [availableUsers, setAvailableUsers] = useState([]);
    const [error, setError] = useState(null);

    //API CALL
    useEffect(() => {
        setIsLoading(true);
        getUsers()
        .then((response) => {
            setAvailableUsers(response.data.users);
            setIsLoading(false);
        })
        .catch((error) => {
            setIsLoading(false);
            setError({ status: error.response.status, msg: error.response.data.msg });
        })
    }, [])


    if (error) {
        return <Error error={error}/>;
    }

    return (
        <>
        <p>You are currently logged in as {currentUser.username}</p>
            {isLoading ? <Loading /> : <UserList availableUsers={availableUsers} />}
        </>
    );
    
}