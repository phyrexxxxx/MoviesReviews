import {useEffect, useRef} from 'react';
import moviesApi from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import LoginForm from '../loginForm/LoginForm';
import React from 'react'

const Login = () => {

    const reviewText = useRef();

    useEffect(() => {
        //getMovieData(movieId);
    }, [])

    const addReview = async (e) => {
        e.preventDefault();
        const rev = reviewText.current;

        try {
            // Backend POST 
            const response = await moviesApi.post("/api/v1/reviews", 
                                                  {imdbId: movieId, reviewBody: rev.value});
            // Frontend Update
            const updatedReviews = [...reviews, {body: rev.value}];
            
            // Clear User Input Review after Submit
            rev.value = "";
            
            // useState() Hook Update
            setReviews(updatedReviews);

        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div>
            <LoginForm handleSubmit={addReview} 
                        revText={reviewText} 
                        labelText="Login"
            />
        </div>
    )
}

export default Login
