import './app.css'
import RandomizeArray from './randomizedArray';
import React, { useState } from 'react';
function MemoryGame() {
    const [Points, setPoints] = useState(0);
    return (
        <>
            <div className="container">
                <RandomizeArray Points={Points} setPoints={setPoints} />
            </div>
            {Points === 3 &&
                <div className={"alert-container"}>
                    <p className={"winParagraph"}>Congratulations, you Win!</p>
                </div>

            }

        </>
    );
}
export default MemoryGame;
