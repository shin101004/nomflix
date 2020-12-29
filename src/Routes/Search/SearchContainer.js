import React, { useLayoutEffect } from "react"
import SearchPresenter from "./SearchPresenter.js"
import {moviesApi, tvApi} from "../../api"

// eslint-disable-next-line 
export default class extends React.Component{
    state = {
        movieResults : null,
        tvResults : null,
        searchTerm : "",
        error : null,
        loading : false
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {searchTerm} = this.state;
        if(searchTerm !== "") {
            this.searchByTerm(searchTerm);
        }
    };

    updateTerm = (event) => {
        const {
            target : {value}
        } = event;
        this.setState({searchTerm: value})
    }

    searchByTerm=async()=>{
        const {searchTerm} = this.state;
        this.setState({loading:true});
        try {
            const {data: { results : movieResults} } = await moviesApi.search(searchTerm);
            const {data: { results : tvResults } }= await tvApi.search(searchTerm);
            
            this.setState({
                movieResults,
                tvResults
            })
            this.setState({loading:true});
        } catch {
            this.setState({error:"Can't find searchTerm"});
        } finally {
            this.setState({loading:false});
        }
    };

    render(){
        const {movieResults, tvResults, searchTerm, loading, error} = this.state;
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                error={error}
                loading={loading}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
                />
        )
    }
}