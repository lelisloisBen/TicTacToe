import React, { useState, useEffect } from 'react';
// import { Consumer } from "../store/appContext";

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
import finalBurk from '../images/burk.gif';
import FinalMonster from '../sounds/finalMonster.mp3';


const TicTacToe = () => {

    const [girl] = useState(new Audio(girlUrl));
    const [scrayClown] = useState(new Audio(clownUrl));
    const [witchLaugh] = useState(new Audio(laugh));
    const [ScarySoundBg] = useState(new Audio(soundBg));
    const [FinalScream] = useState(new Audio(FinalMonster));
    
    const [players, setPlayers] = useState('PLAYER 1: ');
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
    const [finalWinner, setFinalWinner] = useState('d-none');

    const [player1Games, setPlayer1Games] = useState(0);
    const [player2Games, setPlayer2Games] = useState(0);

    ScarySoundBg.volume = 0.1;
    ScarySoundBg.play();

    const clicked = (e) => {
        let id = e.target.id;
        (letter === "X") ? setLetter("O") : setLetter("X");
        (players === 'PLAYER 1: ') ? setPlayers('PLAYER 2: ') : setPlayers('PLAYER 1: ');
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
        if (player1Games === 3 || player2Games === 3) {
            setFinalWinner('card finalCard');
            FinalScream.play();
            if (player1Games === 3) setMsg("PLAYER 1 WINS THE GAME!");
            if (player2Games === 3) setMsg("PLAYER 2 WINS THE GAME!");
            setWitch('d-none');
            girl.pause();
            setScary('d-none');
            scrayClown.pause();
            ScarySoundBg.pause();
            setInterval(() => { window.location.reload(); }, 5000);
        }
        const reset = () => {
            setSq1(""); setPlay1("square");
            setSq2(""); setPlay2("square");
            setSq3(""); setPlay3("square");
            setSq4(""); setPlay4("square");
            setSq5(""); setPlay5("square");
            setSq6(""); setPlay6("square");
            setSq7(""); setPlay7("square");
            setSq8(""); setPlay8("square");
            setSq9(""); setPlay9("square");
        }
        // ScarySoundBg.play();
        const Xwins = () => {
            ScarySoundBg.pause();
            setPlayer1Games(1);
            setMsg("X win");
            setWitch('card winCard');
            girl.play();
            reset();
            setPlayer1Games(player1Games + 1);
            setTimeout(() => { 
                setWitch('d-none');
                girl.pause();
                girl.currentTime = 0;
             }, 5000);
        }
        const Owins = () => {
            ScarySoundBg.pause();
            setMsg("O win");
            setScary('card winCard');
            scrayClown.play();
            reset();
            setPlayer2Games(player2Games + 1);
            setTimeout(() => { 
                setScary('d-none');
                scrayClown.pause();
                scrayClown.currentTime = 0;
             }, 4000);
        }
        const cats = () => {
            ScarySoundBg.pause();
            setMsg("NO WINNER TRY AGAIN");
            setEvenSorciere('card winCard');
            witchLaugh.play();
            reset();
            setTimeout(() => { 
                setEvenSorciere('d-none');
                witchLaugh.pause();
                witchLaugh.currentTime = 0;
             }, 5000);
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
        if (sq1 === "O" && sq2 === "X" && sq3 === "X" && sq4 === "X" && sq5 === "X" && sq6 === "O" && sq7 === "O" && sq8 === "O" && sq9 === "X") cats();
    }, [msg, sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9, girl, scrayClown, witchLaugh, ScarySoundBg, player1Games, player2Games, FinalScream])

   
    return (
        <>
        {/* <Consumer>
        {({ store }) => { 
            return <h2 className="text-center">{store.name}</h2>; 
            }}
        </Consumer> */}
        <h2 className="text-center"><b>{players} {letter} → PLAY</b></h2>
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
        <div className="somOfGames">
            <h2>WIN 3 TIMES TO <br/> WIN THE GAME</h2>
            <br/>
            <h3><span className="underline">PLAYER 1:</span>  {player1Games} win.</h3>
            <br/>
            <h3><span className="underline">PLAYER 2:</span>  {player2Games} win.</h3>
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
        <div className={finalWinner}>
            <p className="text-center msg">{msg}</p>
            <img src={finalBurk} className="card-img-top" alt="..." />
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