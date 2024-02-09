//React and Router part
import { createContext, useState } from "react";

//Context
export const CurrentUserContext = createContext();


export const CurrentUserProvider = ({ children }) => {

    //STATES
    const [currentUser, setCurrentUser ] = useState({
        username: "weegembump",
        name: "Gemma Bump",
        avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/7/7e/MrMen-Bump.png/revision/latest?cb=20180123225553"
    });

    //RENDERS CHILDREN WITH ACCESS TO CONTEXT
    return (
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
            { children }
        </CurrentUserContext.Provider>
    );

};