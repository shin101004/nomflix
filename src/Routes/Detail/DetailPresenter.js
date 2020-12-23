import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../components/Loader";
import Star from "../../components/Star";
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
    height : 100%;
    background-image : url(${props=>props.bgImage});
    background-size : cover;
    background-position : center center;
    filter : blur(3px);
    opacity : 0.5;
`;

const Content = styled.div`
    display : flex;
    width : 100%; 
    position: relative;
    z-index : 1;  
    height : 100%;
`;

const Cover = styled.div`
    width : 30%;
    background-image : url(${props=>props.bgImage});
    background-size : cover;
    background-position : center center;
    height : 100%;
    border-radius : 5px;
`;

const Data = styled.div`
    width : 70%;
    margin-left : 10px;
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
    font-size : 24px;
    line-height : 1.5em;
    color : rgba(255,255,255,0.7);
    text-shadow : 2px 2px black;
    width : 70%;
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
                    <ItemContainer> 
                        <Item>
                            {result.genres && result.genres.map(data=>(<Genre>{data.name}</Genre>))}
                        </Item>
                        <Divider>•</Divider>
                        <Item>📆&nbsp;
                            {result.release_date ? 
                            result.release_date.substring(0,4) : 
                            result.first_air_date.substring(0,4)}
                        </Item>
                        <Divider>•</Divider>
                        <Item>
                            <Star rating={result.vote_average}/> &nbsp;
                            {result.vote_average}/10
                        </Item>
                        <Item>
                            
                        </Item>
                    </ItemContainer>
                    <Overview>
                            {result.overview}
                    </Overview>
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