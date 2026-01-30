export function MoodBoardItem({color, image, description})
{
  return (<div className="mood-board-item" style={{backgroundColor:color}}>

      <img className="mood-board-image" src={image} />
      <h3 className="mood-board-text">{description}</h3>
    </div>);
}

export function MoodBoard(){
  return(
    <div className="mood-board">
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <MoodBoardItem color="#ffa07a" image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
      description="a pathway" />
      <MoodBoardItem color="#ff9999" image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
      description="the shore" />
      <MoodBoardItem color="#add8e6" image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg" description="a ship sailing" />
    </div>)
}
