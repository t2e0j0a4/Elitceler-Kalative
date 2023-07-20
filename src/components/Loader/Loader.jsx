import React from 'react'
import styles from "./Loader.module.css";

const Loader = () => {
    const {dominoes} = styles;
    return (
        <div className={dominoes}><div/><div/><div/><div/><div/></div>
    )
}

export default Loader;