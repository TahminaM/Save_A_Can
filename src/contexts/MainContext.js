import React, { createContext, useState, useEffect } from 'react'


export const MainContext = createContext()

const MainProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    const userId = localStorage.getItem("userId")


    const data = {
        open,
        setOpen
    }


    useEffect(() => {

    },[userId])

    return (
        <MainContext.Provider value={data}>
            {children}
        </MainContext.Provider>
    )
}


export default MainProvider