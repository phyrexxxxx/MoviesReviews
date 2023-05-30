import {useEffect, useRef} from 'react';
import moviesApi from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import React from 'react'

const Reviews = ({getMovieData, movie, reviews, setReviews}) => {

    const reviewText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        getMovieData(movieId);
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
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <img src={movie?.poster} alt="" />
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm handleSubmit={addReview} 
                                                revText={reviewText} 
                                                labelText="Write a Review?"
                                                placeholder="Write Down Your Reviews"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    }
                    {
                        reviews?.map((r) => {
                            return (
                                <>
                                    <Row>
                                        <Col>{r.body}</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>
                                </>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>        
        </Container>
    )
}

export default Reviews
