import React, { useEffect, useState } from "react";
import '../css/createRecomendation.css';

import api from '../Api';
import axios from 'axios';

const CreateRecomendation = () => {

    const handleCreateRecomendation = () => {
        let validataded = false;
        const allInputs = document.querySelectorAll('input');

        for(let i = 0; i < allInputs.length - 1; i++){
            if(allInputs[i].value){
                validataded = true;
            }else{
                validataded = false;
            }
        }
        
        if(validataded){
            api.post('/recomendations/creation',{
                recomendationName: document.getElementById('recomendationName').value,
                recomendationDescription: document.getElementById('recomendationDescription').value,
                recomendationLink: document.getElementById('recomendationLink').value,
                recomendationAuthor: document.getElementById('recomendationAuthor').value
            });
    
            window.location.href = "/";
        }else{
            alert('Preencha todos os campos por favor!')
        }
    }

    return (
        <div className="div-form">
            <div className="div-form-inputs">
                <p>
                    <strong>DEV</strong>
                    RECOMENDATION
                </p>
                <div className="form">
                    <div className="input-recomendation-name">
                        <label htmlFor="recomendationName">Recomendation's name</label>
                        <input type="text" name="recomendationName" id="recomendationName" placeholder="PHP course" />
                    </div>
                    <div className="input-recomendation-author">
                        <label htmlFor="recomendatioAuthor">Recomendation's author</label>
                        <input type="text" name="recomendationAuthor" id="recomendationAuthor" placeholder="Paul Silv" />
                    </div>
                    <div className="input-recomendation-description">
                        <label htmlFor="recomendationDescription">Recomendation's description</label>
                        <textarea name="recomendationDescription" id="recomendationDescription" maxLength="150" placeholder="The best course to learn basic concepts about php"></textarea>
                    </div>
                    <div className="input-recomendation-link">
                        <label htmlFor="recomendationLink">Recomendation's link</label>
                        <input type="text" name="recomendationLink" id="recomendationLink" />
                    </div>
                    <div className="input-recomendation-submit">
                        <input type="submit" value="Create" name="recomendationSubmit" onClick={handleCreateRecomendation} id="recomendationSubmit" />
                    </div> 
                </div>
            </div>
            <div className="div-form-text">
                <div className="div-form-text-content">
                    <p>CREATED BY DEV TO DEV</p>
                    <div className="div-form-text-line"></div>
                    <div className="div-form-text-social">
                        <a href="https://www.instagram.com/felipe.linog/">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/felipe-gadelha-273578207/">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href=" https://wa.me/5588992048450/">
                            <i className="fab fa-whatsapp-square"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateRecomendation;