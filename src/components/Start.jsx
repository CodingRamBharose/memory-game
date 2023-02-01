import React from 'react'
import './Main.css'

function Start({startAgain}) {
    return (
        <div className='startgame'>
                <div className="won">
                    <h2>You Won</h2>
                </div>
                <div className="start">
                    <h3 onClick={startAgain}>Start Again</h3>
                </div>
                    <h4>Click On Any Card To Play Again !</h4>
        </div>
    )
}

export default Start;
