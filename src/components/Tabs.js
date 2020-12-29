import React from "react";
import styled from "styled-components";
import Iframe from 'react-iframe';

const Container = styled.div`
    width : 100%;
    display : flex;
    flex-wrap : wrap;
`;

const Header = styled.ul`
    padding : 0;
    margin : 0;
`

const Tab = styled.li`
    padding : 10px 10px;
    float : left;
    background-color : black;
    font-size : 18px;
    border-radius : 5px;
    margin-right : 10px;
    border : 1px solid white;
    opacity : 0.8;
    cursor : pointer;
    &:hover {
        background-color : rgba(100,100,130,0.8);
        color : black;
    }
`

// const Nav = styled.h1`
//     width : 100%;
//     font-size : 24px;
//     color : white;
//     font-weight : 400;
//     margin-top : 10px;
//     letter-spacing : 2px;
// `;

const Content = styled.div`
    width : 70%;
`

const Block = styled.div`
    background-color : rgba(0,0,0,0.4);
    width : 100%;
    padding : 20px;
    border-bottom-left-radius : 5px;
    border-bottom-right-radius : 5px;
    border-top-right-radius : 5px;
    border-left : 1px solid white;
    border-top : 1px solid white;
    opacity : 0.8;
    margin-top : 20px;
`;



const ProductionImg = styled.div`
    width : 250px;
    background-image : url('${props=>props.src}');
    background-position : center center;
    background-size : contain;
    background-repeat : no-repeat;
    height : 250px;
    float : left;
    position : relative;
    margin-top : 20px;
    margin-right : 20px;
    border-radius : 4px;
    &:hover {
        div {
            opacity : 1;
        }
    }
`;

const ProductionSpan = styled.div`
        opacity : 0;
        width : 100%;
        margin : 0 auto;
        text-align : center;
        position : absolute;
        top : 50%;
        background-color : rgba(0,0,0,0.7);
        transform : translateY(-50%);
        color : white;
        height : 100%;
        font-size : 16px;
        transition : all 0.3s ease-in-out 0s;
        display : flex;
        justify-content : center;
        align-items : center;
`;

const CountryName = styled.div`
    span {
    width : 250px;
    height : 30px;
    margin-top : 20px;
    background-color : rgba(80,120,180,0.9);
    color : white;
    font-size : 16px;
    text-align : center;
    display : flex;
    justify-content : center;
    align-items : center;
    }
`

const Err = styled.div`
    margin-top : 20px;
    font-size : 16px;
    color : white;

`;

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active : 0,
        }
        console.log(props.production);
    }

    clickHandler=(id)=>{
        this.setState({active:id});
    }

    render() {
        return (
            <Container>
                <Header>
                    <Tab onClick={()=>this.clickHandler(1)}>Youtube</Tab>
                    <Tab onClick={()=>this.clickHandler(2)}>Production</Tab>
                    <Tab onClick={()=>this.clickHandler(3)}>Countries</Tab>
                </Header>
                {/* {this.state.active===1 ? <Nav>Youtube</Nav> : 
                 this.state.active===2 ? <Nav>Production</Nav> :
                 this.state.active===3 ? <Nav>Countries</Nav> :
                 null
                } */}
                
                <Content>
                    {this.state.active===1 ? 
                    this.props.youtube.map(data=>
                        <Block>
                            <Iframe url={`http://youtube.com/embed/${data.key}`}
                                width = "755px"
                                height = "450px"
                                padding = "10px"
                                display = "block"
                                position = "realative"
                            >
                            </Iframe>
                        </Block>
                    )
                     : null
                     }
                    {this.state.active===2 ? 
                        (
                            this.props.production.map(data=> (
                                data.logo_path!==null ? 
                                    <ProductionImg src={`https://image.tmdb.org/t/p/w300/${data.logo_path}`}>
                                        <ProductionSpan>
                                        {data.name}
                                        </ProductionSpan>
                                    </ProductionImg>
                                : null
                            ))
                        )

                        : null
                    }
                    {this.state.active===3 ?
                        (
                            <CountryName>{this.props.countries.map(data=>(
                                data.name!==null ?
                                <span>{data.name}</span> : null
                            ))}</CountryName>
                        )
                        : null
                    }
                </Content>
            </Container>
        )
    }
}

// youtube 주소 www.youtube.com/watch?v=key

export default Tabs;