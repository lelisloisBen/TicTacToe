import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <h1 className="text-center">WELCOME <br/> TO <br/> TIC TAC TOE <br/> GAME </h1>
        <div className="d-flex justify-content-center">
            <Link to="/titactoe">
                <div className="start">X</div>
            </Link>
        </div>
        <h2 className="text-center">CLICK HERE ↑</h2>
            
        </>
    );
};

export default Home;