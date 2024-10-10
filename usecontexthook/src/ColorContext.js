
import React from "react";

const colors={
    primary: '#3498db',
    secondary: '#2ecc71',
    background: '#f1c40f'
}
export const ColorContext=React.createContext(colors);

export const ColorProvider=({children})=>
{
    return (
        <ColorContext.Provider value={colors}>
            {children}
        </ColorContext.Provider>
    )
}