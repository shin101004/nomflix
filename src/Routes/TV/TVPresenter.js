import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../components/Section";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Poster from "../../components/Poster"

const Container = styled.div`
    padding : 20px;
`;

const TVPresenter = (
    {topRated,
    airingToday,
    popular,
    error,
    loading})=> 
    <>
        <Helmet>
            <title>TV | Nomfilx</title>
        </Helmet>
        { loading ? ( 
        <Loader/> 
        ) : ( 
        <Container>
            {topRated && topRated.length > 0 &&
            <Section title="Top Rated Shows">
                {topRated.map(show=>(
                    <Poster key={show.id}
                    id={show.id}
                    title={show.original_name}
                    imageUrl={show.poster_path}
                    rating={show.vote_average}
                    year = {show.first_air_date && show.first_air_date.substring(0,4)}
                    />
                ))}
            </Section>}
            {popular && popular.length > 0 &&
            <Section title="Popular Shows">
                {popular.map(show=>(
                    <Poster key={show.id}
                    id={show.id}
                    title={show.original_name}
                    imageUrl={show.poster_path}
                    rating={show.vote_average}
                    year = {show.first_air_date && show.first_air_date.substring(0,4)}
                    />
                ))}
            </Section>}
            {airingToday && airingToday.length > 0 &&
            <Section title="Airing Today">
                {airingToday.map(show=>(
                <Poster key={show.id}
                        id={show.id}
                        title={show.original_name}
                        imageUrl={show.poster_path}
                        rating={show.vote_average}
                        year = {show.first_air_date && show.first_air_date.substring(0,4)}
                />
                ))}
            </Section>}
            {error && <Message color="#e74c3c" text={error}/>}
        </Container>
        )}
    </>

TVPresenter.propTypes = {
    topRated :PropTypes.array,
    airingToday:PropTypes.array,
    popular  :PropTypes.array,
    error :PropTypes.string,
    loading  :PropTypes.bool.isRequired
};

export default TVPresenter;