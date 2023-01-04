import React, { useEffect, useState } from "react";
import '../css/recomendation.css'

import api from '../Api';
import axios from 'axios';

import {  useParams  } from 'react-router-dom'

const RecomendationPage = () => {

    const [recomendationData, setRecomendationData] = useState([]);
    const { id } = useParams();

    useEffect(()=>{
        api.get(`recomendations/${id}`).then((res) => {
            setRecomendationData(res.data);
        })
    },[])

    return (
        <div className="recomendation">
            <div className="recomendation-content">
                <h1 className="recomendationName">
                    {recomendationData.recomendationName}
                </h1>
                <p className="recomendationDescription">
                    {recomendationData.recomendationDescription}
                </p>
                <button className="link">
                    <a href={recomendationData.recomendationLink}>Conferir</a>
                </button>
            <p className="recomendationAuthor">{recomendationData.recomendationAuthor}</p>
        </div>
    </div>
    )
}

export default RecomendationPage;