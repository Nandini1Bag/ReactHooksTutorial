// StyledComponent.js
import React, { useContext } from "react";
import { ColorContext } from "./ColorContext";

const StyledComponent = () => {
    const colors = useContext(ColorContext);

    return (
        <div style={{ backgroundColor: colors.background, padding: '20px' }}>
            <h1 style={{ color: colors.primary }}>Hello, World!</h1>
            <p style={{ color: colors.secondary }}>This is a styled component!</p>
        </div>
    );
};

export default StyledComponent;
