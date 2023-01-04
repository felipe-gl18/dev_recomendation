import React, { useState, useEffect } from "react";
import '../css/home.css'

import api from '../Api';
import axios from 'axios';
import { Link } from "react-router-dom";

const Home = () => {

    const [allRecomendations, setAllRecomendations] = useState([]);

    useEffect(()=>{
        api.get(`/recomendations/allData/${document.getElementById('search').value}`).then(res=>{
            setAllRecomendations(res.data)
        })
    })

    const handleSearchRecomendation  = () =>{
        api.get(`/recomendations/allData/${document.getElementById('search').value}`).then(res=>{
            setAllRecomendations(res.data)
        })
    }

    return (
        <main>
            <div className="apresentation">
                <div className="apresentationText">
                    <h1>
                        <strong>DEV</strong><br />
                        RECOMENDATION
                    </h1>
                    <p>
                        HERE YOU CAN FIND OUT WHERE AND HOW TO<br /> ACCESS THE BEST CONTENTS FOR<br /> DEVOLOPERS <br />
                    </p>
                </div>
            </div>
    
            <div className="form">
                <input type="text" name="search" id="search" placeholder="Search for some recomendation" />
                <button><i className="fas fa-search" onClick={handleSearchRecomendation}></i></button>
            </div>
    
            <div className="recomendations">
                {allRecomendations.length?
                   (
                    <>
                        {allRecomendations.map((data) => (
                            <div className="recomendations-item">
                                <div className="recomendations-item-image">
                                    <img src="/imgs/main-photo.jpg" alt="illustration" />
                                </div>
                                <div className="recomendations-item-content">
                                    <p className="recomendations-item-title">{data.recomendationName}</p>
                                    <p className="recomendations-item-description">{data.recomendationDescription}</p>
                                    <button><Link to={`/recomendations/` + data._id}>See more</Link></button>
                                </div>
                            </div>
                        ))}
                    </>
                   ):(
                        <div className="noRecomendations">
                            <h1>There's no recomendation with this name</h1>
                        </div>
                    )
                }
            </div>
        </main> 
    );
}

export default Home;