import React, { useState, useEffect } from 'react';
import { Consumer } from "../store/appContext";

import sorciere from '../images/sorciere.gif';
import clown from '../images/clown.gif';
import evenWitch from '../images/evenWitch.gif';
import girlUrl from '../sounds/girl.wav';
import clownUrl from '../sounds/scream.wav';
import laugh from '../sounds/laugh.mp3';
import flyWitch from '../images/flyWitch.png';
import bat from '../images/bat.png';
import cat from '../images/cat.gif';
import soundBg from '../sounds/sound.mp3';


const TicTacToe = () => {

    const [girl] = useState(new Audio(girlUrl));
    const [scrayClown] = useState(new Audio(clownUrl));
    const [witchLaugh] = useState(new Audio(laugh));
    const [ScarySoundBg] = useState(new Audio(soundBg));
    
    const [letter, setLetter] = useState('X');
    const [sq1, setSq1] = useState("");
    const [play1, setPlay1] = useState("square");
    const [sq2, setSq2] = useState("");
    const [play2, setPlay2] = useState("square");
    const [sq3, setSq3] = useState("");
    const [play3, setPlay3] = useState("square");
    const [sq4, setSq4] = useState("");
    const [play4, setPlay4] = useState("square");
    const [sq5, setSq5] = useState("");
    const [play5, setPlay5] = useState("square");
    const [sq6, setSq6] = useState("");
    const [play6, setPlay6] = useState("square");
    const [sq7, setSq7] = useState("");
    const [play7, setPlay7] = useState("square");
    const [sq8, setSq8] = useState("");
    const [play8, setPlay8] = useState("square");
    const [sq9, setSq9] = useState("");
    const [play9, setPlay9] = useState("square");
    const [msg, setMsg] = useState('');
    const [witch, setWitch] = useState('card winCard d-none');
    const [scary, setScary] = useState('card winCard d-none');
    const [evenSorciere, setEvenSorciere] = useState('d-none');

    const clicked = (e) => {
        let id = e.target.id;
        (letter === "X") ? setLetter("O") : setLetter("X");
        if (id === "1") { setSq1(letter); setPlay1("square noClik"); }
        if (id === "2") { setSq2(letter); setPlay2("square noClik"); }
        if (id === "3") { setSq3(letter); setPlay3("square noClik"); }
        if (id === "4") { setSq4(letter); setPlay4("square noClik"); }
        if (id === "5") { setSq5(letter); setPlay5("square noClik"); }
        if (id === "6") { setSq6(letter); setPlay6("square noClik"); }
        if (id === "7") { setSq7(letter); setPlay7("square noClik"); }
        if (id === "8") { setSq8(letter); setPlay8("square noClik"); }
        if (id === "9") { setSq9(letter); setPlay9("square noClik"); }
    }
    useEffect(() => {
        ScarySoundBg.play();
        const Xwins = () => {
            setMsg("X win");
            setWitch('card winCard');
            girl.play();
            ScarySoundBg.pause();
            setInterval(() => { window.location.reload(); }, 5000);
        }
        const Owins = () => {
            setMsg("O win");
            setScary('card winCard');
            scrayClown.play();
            ScarySoundBg.pause();
            setInterval(() => { window.location.reload(); }, 4000);
        }
        const cats = () => {
            setMsg("NO WINNER TRY AGAIN");
            setEvenSorciere('card winCard')
            witchLaugh.play();
            ScarySoundBg.pause();
            setInterval(() => { window.location.reload(); }, 5000);
        }
        if (sq1 === "X" && sq2 === "X" && sq3 === "X") Xwins();
        if (sq1 === "O" && sq2 === "O" && sq3 === "O") Owins();
        if (sq4 === "X" && sq5 === "X" && sq6 === "X") Xwins();
        if (sq4 === "O" && sq5 === "O" && sq6 === "O") Owins();
        if (sq7 === "X" && sq8 === "X" && sq9 === "X") Xwins();
        if (sq7 === "O" && sq8 === "O" && sq9 === "O") Owins();
        if (sq1 === "X" && sq4 === "X" && sq7 === "X") Xwins();
        if (sq1 === "O" && sq4 === "O" && sq7 === "O") Owins();
        if (sq2 === "X" && sq5 === "X" && sq8 === "X") Xwins();
        if (sq2 === "O" && sq5 === "O" && sq8 === "O") Owins();
        if (sq3 === "X" && sq6 === "X" && sq9 === "X") Xwins();
        if (sq3 === "O" && sq6 === "O" && sq9 === "O") Owins();
        if (sq1 === "X" && sq5 === "X" && sq9 === "X") Xwins();
        if (sq1 === "O" && sq5 === "O" && sq9 === "O") Owins();
        if (sq3 === "X" && sq5 === "X" && sq7 === "X") Xwins();
        if (sq3 === "O" && sq5 === "O" && sq7 === "O") Owins();
        if (sq1 === "X" && sq2 === "X" && sq3 === "O" && sq4 === "O" && sq5 === "O" && sq6 === "X" && sq7 === "X" && sq8 === "O" && sq9 === "X") cats();
        if (sq1 === "X" && sq2 === "O" && sq3 === "X" && sq4 === "X" && sq5 === "O" && sq6 === "O" && sq7 === "O" && sq8 === "X" && sq9 === "X") cats();
        if (sq1 === "O" && sq2 === "X" && sq3 === "O" && sq4 === "X" && sq5 === "X" && sq6 === "O" && sq7 === "X" && sq8 === "O" && sq9 === "X") cats();
        if (sq1 === "X" && sq2 === "O" && sq3 === "X" && sq4 === "O" && sq5 === "O" && sq6 === "X" && sq7 === "X" && sq8 === "X" && sq9 === "O") cats();
        if (sq1 === "O" && sq2 === "X" && sq3 === "X" && sq4 === "X" && sq5 === "O" && sq6 === "O" && sq7 === "O" && sq8 === "X" && sq9 === "X") cats();
        if (sq1 === "O" && sq2 === "X" && sq3 === "O" && sq4 === "X" && sq5 === "O" && sq6 === "X" && sq7 === "X" && sq8 === "O" && sq9 === "X") cats();
        if (sq1 === "O" && sq2 === "X" && sq3 === "X" && sq4 === "X" && sq5 === "O" && sq6 === "O" && sq7 === "X" && sq8 === "O" && sq9 === "X") cats();
        if (sq1 === "X" && sq2 === "O" && sq3 === "X" && sq4 === "X" && sq5 === "X" && sq6 === "O" && sq7 === "O" && sq8 === "X" && sq9 === "O") cats();
        if (sq1 === "X" && sq2 === "O" && sq3 === "O" && sq4 === "O" && sq5 === "X" && sq6 === "X" && sq7 === "X" && sq8 === "X" && sq9 === "O") cats();
        if (sq1 === "O" && sq2 === "O" && sq3 === "X" && sq4 === "X" && sq5 === "X" && sq6 === "O" && sq7 === "O" && sq8 === "X" && sq9 === "X") cats();
        if (sq1 === "X" && sq2 === "X" && sq3 === "O" && sq4 === "O" && sq5 === "O" && sq6 === "X" && sq7 === "X" && sq8 === "X" && sq9 === "O") cats();
        if (sq1 === "X" && sq2 === "X" && sq3 === "O" && sq4 === "O" && sq5 === "X" && sq6 === "X" && sq7 === "X" && sq8 === "O" && sq9 === "O") cats();
        if (sq1 === "O" && sq2 === "X" && sq3 === "O" && sq4 === "O" && sq5 === "X" && sq6 === "X" && sq7 === "X" && sq8 === "O" && sq9 === "X") cats();
        if (sq1 === "X" && sq2 === "O" && sq3 === "X" && sq4 === "O" && sq5 === "X" && sq6 === "X" && sq7 === "O" && sq8 === "X" && sq9 === "O") cats();
    }, [msg, sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9, girl, scrayClown, ScarySoundBg, witchLaugh])

   
    return (
        <>
        <Consumer>
        {({ store }) => { 
            return <h2 className="text-center">{store.name}</h2>; 
            }}
        </Consumer>
        <h3 className="text-center">It's {letter} turn to play</h3>
        <div className="board">
            <div id="1" onClick={clicked} className={play1}>{sq1}</div>
            <div id="2" onClick={clicked} className={play2}>{sq2}</div>
            <div id="3" onClick={clicked} className={play3}>{sq3}</div>
            <div id="4" onClick={clicked} className={play4}>{sq4}</div>
            <div id="5" onClick={clicked} className={play5}>{sq5}</div>
            <div id="6" onClick={clicked} className={play6}>{sq6}</div>
            <div id="7" onClick={clicked} className={play7}>{sq7}</div>
            <div id="8" onClick={clicked} className={play8}>{sq8}</div>
            <div id="9" onClick={clicked} className={play9}>{sq9}</div>
        </div>
        <div className={witch}>
            <p className="text-center msg">{msg}</p>
            <img src={sorciere} className="card-img-top" alt="..." />
        </div>
        <div className={scary}>
            <p className="text-center msg">{msg}</p>
            <img src={clown} className="card-img-top" alt="..." />
        </div>
        <div className={evenSorciere}>
            <p className="text-center msg">{msg}</p>
            <img src={evenWitch} className="card-img-top" alt="..." />
        </div>
        <div id = "pot">
            <img src={flyWitch} width="100px" height="100px" alt="witch" />
        </div>
        <div className="bat">
            <img src={bat} alt="bat" width = "100px" height ="100px"/>
        </div>
        <div className="cat">
            <img src={cat} alt="bat" width = "100px" height ="100px"/>
        </div>
        </>
    );
};

export default TicTacToe;