import React from 'react'
import styles from "./Powered.module.css";
import Elitceler from "../../assets/Elitceler.svg";

const Powered = () => {

    const { app__powered } = styles;

  return (
    <div className={app__powered}>
        <p>Powered by <a target='_blank' href="https://elitceler.com" rel='noreferrer'>Elitceler Technologies</a></p>
        <img src={Elitceler} alt="Elitceler"/>
    </div>
  )
}

export default Powered