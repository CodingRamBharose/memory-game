import React, { useState } from 'react'
import './Main.css'
import Images from './images/Image';
import shuffle from 'lodash.shuffle';
import question from './images/question.png'
import Start from './Start';

function Main() {
  const [image, setimages] = useState(shuffle([...Images,...Images]));
  const [clicks,setClicks] =useState(0)
  const [won,setWon]=useState(false);
  const [openedCard,setopenedCard] = useState([]);
  const [foundPairs,setFoundPairs]=useState([]);
  const [start,setStart]=useState(true);

  const flipCard=(index)=>{
    if(won){
      setimages(shuffle([...Images, ...Images]));
      setFoundPairs([]);
      setWon(false);
      setClicks(0);
      setStart(true);
    }
    if(openedCard.length===0){
      setopenedCard([index])
    }
    if(openedCard.length===1){
      const firstIndex=openedCard[0];
      const secondIndex=index;
      
      if(image[firstIndex]===image[secondIndex]){
        if(foundPairs.length+2===image.length){
          setWon(true);
        }
        setFoundPairs([...foundPairs,firstIndex,secondIndex]);
      }
      setopenedCard([...openedCard,index]);
    }
    if(openedCard.length===2){
      setopenedCard([index])
    }
    setClicks(clicks+1);
  }

  const startAgain=()=>{
    setStart(false);
  }

  return (
    <>
    {won&&start ? <Start startAgain={startAgain}/> :(
      <>
         <div className="memory-game">
        {image.map((a, index) => {
          const isFlipped=(openedCard.indexOf(index)!==-1)||foundPairs.indexOf(index)!==-1;
          return(
            <div className={"memory-card" +(isFlipped?" flip": "")} key={index} onClick={()=>flipCard(index)}>
            <img className='front-face' src={a} alt="Not Relode" />
            <img className="back-face" src={question} alt="QuestionMark" />
          </div>
        )
        })};
      </div>
      </>
    )}
    </>
  )
}

export default Main;
