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
    margin-bottom : 20px;
    width : 100%;
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

const Content = styled.div`
    width : 80%;
`

const Block = styled.div`
    background-color : rgba(0,0,0,0.4);
    width : 570px;
    padding : 20px;
    border-radius : 5px;
    border : 1px solid white;
    opacity : 0.8;
    margin : 20px 0;
`;

const ProductionImg = styled.div`
    width : 150px;
    background-image : url('${props=>props.src}');
    background-position : center center;
    background-size : contain;
    background-repeat : no-repeat;
    height : 250px;
    float : left;
    position : relative;
    margin-top : 20px;
    margin-right : 20px;
    margin-bottom : 20px;
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
    margin-bottom : 20px;
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
                            <Iframe url={`https://youtube.com/embed/${data.key}`}
                                width = "530px"
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
                                : <ProductionImg src="../noPosterSmall.png"/>
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