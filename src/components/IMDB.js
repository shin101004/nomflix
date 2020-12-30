import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { func } from "prop-types";


const Content = styled.button`
    background-color : #edd051;
    font-weight : bold;
    font-size : 16px;
    letter-spacing : 2px;
    padding : 5px;
    border-radius : 5px;
    border : #edd051 1px solid;
    margin-right : 10px;
    cursor : pointer;
    &:hover {
        border : 2px solid white;
        color : rgba(255,255,255,1);
    }
`;

class IMDB extends React.Component {
    //eslint-disable-next-line
    constructor(props){
        super(props);
    }

    handleClick(link) {
        window.location.replace(`https://imdb.com/title/${link}`);
    }

    render() {
        return (
        <Content onClick={()=>this.handleClick(this.props.link)}>
            IMDB
        </Content>
        )
    }
}

export default IMDB;