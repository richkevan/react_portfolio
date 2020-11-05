import React from "react"
import think from '../../assets/think.png'
import github from '../../assets/github.png'
import "./homeScreen.css"

export const HomeScreen = () => {
    return (
        <>
        <h1>Home</h1>
        <div>
            <img src={think} alt="thinking avatar" />
            <p>
                Please excuse the lack of content as I rebuild my 
                portfolio. In the mean time check out some of the work 
                I have been doing on my github
            </p>
            <a href='https://github.com/richkevan'><img src={github} alt='github' /></a>
        </div>
        </>
    )
}