import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/cards';
// an array created to point to the images and its a object with source property
const cardImages = [
  {"src":"/images/helmet-1.png",matched:false},
  {"src":"/images/potion-1.png",matched:false},
  {"src":"/images/ring-1.png",matched:false},
  {"src":"/images/shield-1.png",matched:false},
  {"src":"/images/sword-1.png",matched:false},
  {"src":"/images/cricketbat.png",matched:false},
]
function App() {
  const [cards, setCards] = useState([])
  const [flips, setFlips] = useState(0)
const [choiceOne,setChoiceOne]=useState(null)
const[choiceTwo,setChoiceTwo]=useState(null)
const[disabled,setDisabled]=useState(false)
  // shuffle cards for new game
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
      
    setCards(shuffledCards)
    setFlips(0)
    setChoiceOne(null)
    setChoiceTwo(null)
  }
  const handlechoice = (card) =>{
    if(choiceOne===null){
      setChoiceOne(card)
    }
    else{
      setChoiceTwo(card)
    }
  }
  useEffect(()=>{
    
if(choiceOne  && choiceTwo ){
// if match happemns then we update card state with set cards and return a object card

setDisabled(true)
if(choiceOne.src===choiceTwo.src){

  setCards(prevCards => {
    return prevCards.map((card)=>{
      if(card.src === choiceOne.src){
        return {...card,matched:true}
      }
      else{
        return card;
      }
    })
  })
  resetturns()
}
else{
  setTimeout(() =>
  resetturns() ,2000)
}
}
},[choiceOne,choiceTwo])


const resetturns = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setFlips(prevTurns=>prevTurns+1)
  setDisabled(false)
}
useEffect(()=>{
shuffleCards()
},[])
  

  return (
    <div className="app">
      <h1>Cue Cards</h1>
      <button onClick={shuffleCards}> Start Game </button>

      <div className="cardgrid">
        {cards.map(card => (
         <SingleCard key={card.id} card={card} handlechoice={handlechoice} flipped={card===choiceOne || card===choiceTwo || card.matched } disabled={disabled}/>
        ))}
      </div>
       <p>No of Flips:{flips}</p>
    </div>
  );
}

export default App