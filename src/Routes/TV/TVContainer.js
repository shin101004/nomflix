import React from "react"
import TVPresenter from "./TVPresenter.js"
import {tvApi} from "../../api"

// eslint-disable-next-line 
export default class extends React.Component{
    state = {
        topRated : null,
        airingToday : null,
        popular : null,
        error : null,
        loading : true
    };

    async componentDidMount(){
        try {
            const {
                data:{results : topRated}} = await tvApi.topRated();
            const {
                data:{results:airingToday}} = await tvApi.airing();
            const {
                data : {results : popular}} = await tvApi.popular();
            this.setState({
                topRated : topRated,
                airingToday : airingToday,
                popular : popular
            })
        } catch (error) {
            this.setState({
                error : "Can't get TV Information"
            })
        } finally {
            this.setState({
                loading : false
            })
        }
    }

    render(){
        const {topRated, airingToday, popular, loading, error} = this.state;
        
        return (
            <TVPresenter
                topRated={topRated}
                airingToday={airingToday}
                popular={popular}
                error={error}
                loading={loading}
                />
        )
    }
}