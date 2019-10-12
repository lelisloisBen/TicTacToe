import React, { useState, useEffect } from 'react';


const TicTacToe = () => {
    
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
        if (sq1 === "X" && sq2 === "X" && sq3 === "X") setMsg("X win");
        if (sq1 === "O" && sq2 === "O" && sq3 === "O") setMsg("O win");
        if (sq4 === "X" && sq5 === "X" && sq6 === "X") setMsg("X win");
        if (sq4 === "O" && sq5 === "O" && sq6 === "O") setMsg("O win");
        if (sq7 === "X" && sq8 === "X" && sq9 === "X") setMsg("X win");
        if (sq7 === "O" && sq8 === "O" && sq9 === "O") setMsg("O win");
        if (sq1 === "X" && sq4 === "X" && sq7 === "X") setMsg("X win");
        if (sq1 === "O" && sq4 === "O" && sq7 === "O") setMsg("O win");
        if (sq2 === "X" && sq5 === "X" && sq8 === "X") setMsg("X win");
        if (sq2 === "O" && sq5 === "O" && sq8 === "O") setMsg("O win");
        if (sq3 === "X" && sq6 === "X" && sq9 === "X") setMsg("X win");
        if (sq3 === "O" && sq6 === "O" && sq9 === "O") setMsg("O win");
        if (sq1 === "X" && sq5 === "X" && sq9 === "X") setMsg("X win");
        if (sq1 === "O" && sq5 === "O" && sq9 === "O") setMsg("O win");
        if (sq3 === "X" && sq5 === "X" && sq7 === "X") setMsg("X win");
        if (sq3 === "O" && sq5 === "O" && sq7 === "O") setMsg("O win");
    }, [msg, sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9])

   
    return (
        <>
        <h3 className="text-center">It's {letter} turn to play</h3>
        <h3 className="text-center">{msg}</h3>
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
        </>
    );
};

export default TicTacToe;