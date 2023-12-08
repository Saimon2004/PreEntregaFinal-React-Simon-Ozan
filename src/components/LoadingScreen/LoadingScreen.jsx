import React from 'react'
import "./LoadingScreen.css"

export const LoadingScreen = ({ defaultBg, changeBg }) => {

    const bgStyle = {
        backgroundImage: `url(${defaultBg})`
    }

    if (changeBg) {
        bgStyle.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${changeBg})`;
    }

    return (
        < div className='loading-background' style={bgStyle}>
            < span className="loader" ></span >
        </div >
    )
}
