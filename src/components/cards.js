import  './card.css'

export default function SingleCard({card , handlechoice, flipped,disabled}){
  const handleclick = () => {
    if(!disabled){
    handlechoice(card)
  } }
    return(
        <div className="card">
          <div className={flipped ? "flipped" : ""}>
          <img className="front" src={card.src} alt="card front" />
          <img className="back" src="/images/cover.png" alt="cover" onClick={handleclick}/>
        </div>
      </div>
    )
}
// dont have acess to card images so accept it as  props and work