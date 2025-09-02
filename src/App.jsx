import { useState, useEffect } from "react";

export default function Card() {
  const [images, setimages] = useState([]);
  const [score, setscore] = useState(0);
  const [bestscore, setbestscore] = useState(0);
  const [showDialog, setshowDialog] = useState(false);
  const [message, setmessage] = useState("IF YOU CLICK THE SAME PICTURE TWICE YOU LOSE");
  




  const cards = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    src: `https://picsum.photos/200?random=${i}`,
    clicked: false,
  }));



  useEffect(() => {

    setimages(cards)
  }, []);

  function shuffle(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
  }


  function Handleclick(id) {
    const newImage = [...images];
    const index = newImage.findIndex((img) => { return img.id === id })


    if (!newImage[index].clicked) {
      newImage[index].clicked = true;
      setimages(shuffle(newImage));

      if (score + 1 == 12) {
        setmessage("YOU HAVE SHARP MEMORY !! YOU WIN💐💐💐💐");
        setshowDialog(true);

      }

      setscore(score + 1);

      if (score + 1 > bestscore) {
        setbestscore(score + 1);
      }

    }
    else {
      setmessage("YOU LOSE 😒 YOU CLICKED THE PICTURE TWICE");
      setscore(0);
      setshowDialog(true);
      setimages(cards);
    }

  }
function Reset(){
  setscore(0);
  setshowDialog(false);
  setimages(cards);

}

  return (
    <div className="main">
      <h1 id="top">SNAP MEMORY</h1>
      <h4 id="warn" >IF YOU CLICK THE SAME PICTURE TWICE YOU LOSE</h4>
      <div id="score">
        <h2>SCORE : {score}</h2>
        <h2>BEST SCORE : {bestscore}</h2>
      </div>

      <div id="cells">
        {images.map((card) => {
          return (
            <div id="card" key={card.id}
              onClick={() => Handleclick(card.id)}>
              <img src={card.src} />
            </div>
          );
        })}
      </div>
      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <p>{message}</p>
            <button onClick={() => Reset()}>Close</button>
          </div>
        </div>
      )}
    </div>
  );

}
