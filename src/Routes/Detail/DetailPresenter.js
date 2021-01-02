import React from "react";
import {Link} from "react-router-dom"
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../components/Loader";
import Tabs from "../../components/Tabs";
import Star from "../../components/Star";
import IMDB from "../../components/IMDB";
import Helmet from "react-helmet";

const Container = styled.div`
    height : calc(100vh - 50px);
    width : 100%;
    position : relative;
    padding : 50px;
`;

const Backdrop = styled.div`
    position : absolute;
    top : 0px;
    left : 0;
    width : 100%;
    height : 70%;
    background-image : url(${props=>props.bgImage});
    background-size : 100% 100%;
    background-position : center center;
    background-repeat : no-repeat;
    filter : blur(2px);
    opacity : 0.5;
`;

const Content = styled.div`
    display : flex;
    flex-wrap : wrap;
    width : 50%; 
    position: relative;
    z-index : 1;  
    height : 80%;
    margin : 0 auto;
`;

const Cover = styled.div`
    width : 70%;
    background-image : url(${props=>props.bgImage});
    background-size : 100% 100%;
    background-position : center center;
    height : 90%;
    border-radius : 5px;
    margin : 0 auto;
    margin-top : 150px;
`;

const Data = styled.div`
    width : 100%;
    margin-top : 10px;
`;

const Title = styled.h1`
    font-size : 32px;
    margin-bottom : 20px;
    font-weight : 600;
`;

const ItemContainer = styled.div``;

const Item = styled.span`
    font-size : 18px;
`;

const Genre = styled.span`
    display : inline-block;
    &:not(:last-child)::after{
     content : " / ";
     white-space : pre;
    }
`

const Divider = styled.span`
    margin : 0 10px;
`;

const Overview = styled.div`
    margin-top : 10px;
    font-size : 20px;
    line-height : 1.5em;
    color : rgba(255,255,255,0.7);
    text-shadow : 2px 2px black;
    width : 100%;
    margin-bottom : 20px;
`;

const DetailPresenter = ({result,error,loading})=> 
    loading ? (
        <>
            <Helmet>
                <title>Loading | Nomflix</title>
            </Helmet>
            <Loader/>
        </>
       ) :(
        <Container>
            <Helmet>
                <title>{result.original_title ? result.original_title : result.original_name}{" "} | Nomflix</title>
            </Helmet>
            <Backdrop bgImage={result.backdrop_path ?
                `https://image.tmdb.org/t/p/original${result.backdrop_path}` :
                `../noPosterSmall.png`}
            />
            <Content>
                <Cover bgImage=
                    {result.poster_path ? 
                    `https://image.tmdb.org/t/p/original${result.poster_path}` : 
                    (
                        result.still_path ? 
                        `https://image.tmdb.org/t/p/original${result.still_path}` :
                        `../noPosterSmall.png`
                    )}
                />
                <Data>
                    <Title>{result.original_title ? result.original_title : result.original_name}</Title>
                    <> 
                        <Item>
                            {result.genres && result.genres.map(data=>(<Genre>{data.name}</Genre>))}
                        </Item>
                        <Divider>•</Divider>
                        <Item>📆&nbsp;
                            {
                            result.release_date ? 
                            result.release_date.substring(0,4) : 
                            result.first_air_date.substring(0,4)
                            }
                        </Item>
                        <Divider>•</Divider>
                        <Item>
                            <Star rating={result.vote_average}/> &nbsp;
                            {result.vote_average}/10
                        </Item>
                        <Divider>•</Divider>
                        <Item>
                        {
                            result.original_title && result.original_title ? 
                            <IMDB link={result.imdb_id}></IMDB> :
                            null
                        }
                        </Item>
                    </>
                    <Overview>
                            {result.overview}
                    </Overview>
                    <Tabs youtube={result.videos.results} 
                        production={result.production_companies}
                        countries={result.production_countries} 
                    />
                </Data>
            </Content>
        </Container>
    );


DetailPresenter.propTypes = {
    result : PropTypes.object,
    error :PropTypes.string,
    loading  :PropTypes.bool.isRequired
};

export default DetailPresenter;