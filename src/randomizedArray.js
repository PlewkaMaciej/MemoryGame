import ResetGame from './resertGame';
import React, { useState, useEffect } from 'react';
function RandomizeArray({ Points, setPoints }) {
    const [Is2squaresClickedAlready, setIs2squaresClickedAlready] = useState(0);
    const [RandomColorArray, setRandomColorArray] = useState([])
    const [ChosenArray, setChosenArray] = useState([]);
    const [ColorArray, setColorArray] = useState(["red1", "red2", "blue1", "blue2", "green1", "green2"]);
    const randomizeArray = () => {
        let random = ColorArray
        random.sort(() =>
            0.5 - Math.random()
        )
        setRandomColorArray(random)
    }
    const checkClass = (e) => {
        if (Is2squaresClickedAlready === 0) {
            setChosenArray(prevChosenArray => [...prevChosenArray, e.target.className])
            let colorToShow = e.target.className.substring(0, e.target.className.length - 1)
            e.target.style.background = colorToShow
        }
    }
    useEffect(() => {
        if (ChosenArray.length === 2) {
            if (ChosenArray[0] !== ChosenArray[1]) {
                if (ChosenArray[0].length - 1 === ChosenArray[1].length - 1) {
                    setPoints(Points + 1)
                    setChosenArray([])
                }
                else {
                    setTimeout(() => {
                        let firstChosen = document.querySelector("." + ChosenArray[0])
                        let secondChosen = document.querySelector("." + ChosenArray[1])
                        firstChosen.style.background = "black"
                        secondChosen.style.background = "black"
                        setChosenArray([])
                    }, 1000)
                }
            }
            else {
                setChosenArray([ChosenArray[0]])
            }
        }
    }, [ChosenArray]);
    useEffect(() => {
        randomizeArray()
    }, [])
    useEffect(() => {
        if (ChosenArray.length === 2) {
            setIs2squaresClickedAlready(1)
        }
        else {
            setIs2squaresClickedAlready(0)
        }
    }, [ChosenArray])
    return (
        <>
            {RandomColorArray.map((id) => {
                return <div key={id} onClick={checkClass} className={id}>
                </div>
            })}
            {Points === 3 &&
                <ResetGame ColorArray={ColorArray} setChosenArray={setChosenArray} setPoints={setPoints} />
            }
        </>
    )
}
export default RandomizeArray