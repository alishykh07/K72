import React, { createContext, useState, useContext } from 'react';

export const NavContext = createContext();

export const useNav = () => {
    const context = useContext(NavContext)
    if (!context) {
        throw new Error('useNav must be used within a NavProvider')
    }
    return context
}

const NavProvider = ({ children }) => {
    const [navOpen, setNavOpen] = useState(false)
    
    return (
        <NavContext.Provider value={{ navOpen, setNavOpen }}>
            {children}
        </NavContext.Provider>
    )
}

export default NavProvider
