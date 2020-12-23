import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../components/Section"
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Poster from "../../components/Poster"

const Container = styled.div`
    padding : 20px;
`;
const HomePresenter = ({nowPlaying, upcoming, popular, error,loading}
    ) =>
    <>
    <Helmet>
        <title>Movies | Nomfilx</title>
    </Helmet>
    {loading ? (
        <Loader/> 
    ): (
        <Container>
            {nowPlaying && nowPlaying.length>0 && (
            <Section title="Now Playing">
                {nowPlaying.map(movie=>(
                <Poster key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                isMovie={true}
                rating={movie.vote_average}
                year = {movie.release_date && movie.release_date.substring(0,4)}
        />
        ))}
            </Section>
            )}
    
            {upcoming && upcoming.length>0 && (
            <Section title="Up Coming">
                {upcoming.map(movie=>(
                <Poster key={movie.id}
                        id={movie.id}
                        title={movie.original_title}
                        imageUrl={movie.poster_path}
                        isMovie={true}
                        rating={movie.vote_average}
                        year = {movie.release_date && movie.release_date.substring(0,4)}
                />
                ))}
            </Section>
            )}
    
            {popular && popular.length>0 && (
            <Section title="Popular">
                {popular.map(movie=>(
               <Poster key={movie.id}
               id={movie.id}
               title={movie.original_title}
               imageUrl={movie.poster_path}
               isMovie={true}
               rating={movie.vote_average}
               year = {movie.release_date && movie.release_date.substring(0,4)}
       />
       ))}
            </Section>
            )}
            {error && <Message color="#e74c3c" text={error} />}
        </Container>
    )}
    </>
    


HomePresenter.propTypes = {
    nowPlaying :PropTypes.array,
    upcoming:PropTypes.array,
    popular  :PropTypes.array,
    error :PropTypes.string,
    loading  :PropTypes.bool.isRequired
};



export default HomePresenter;