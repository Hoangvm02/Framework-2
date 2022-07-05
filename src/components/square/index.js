import React from 'react';
import styles from './square.module.css';

const Square = ({value, handlePlay, index, winnerGame}) =>{
    console.log('winner', winnerGame);
    return <button className={styles.square} style={winnerGame ? {opacity: '0.5', pointerEvents:'none'}: {}} onClick={ () => handlePlay(index)} >{value}</button>
}   

export default Square