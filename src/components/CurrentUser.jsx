import { createContext, useState } from "react";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {

    //sets a default user from the available ones
    const [currentUser, setCurrentUser ] = useState({
        username: "weegembump",
        name: "Gemma Bump",
        avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/7/7e/MrMen-Bump.png/revision/latest?cb=20180123225553"
    });

    //render children with access to context
    return (
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
            { children }
        </CurrentUserContext.Provider>
    );

};