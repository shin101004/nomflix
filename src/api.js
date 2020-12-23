import axios from "axios";

const api = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    params : {
        api_key : "9a735f45eff9846b9afeee748729ddaf",
        language : "en-Us"   
    }
});

export const moviesApi = {
    nowPlaying : ()=> api.get("movie/now_playing"),
    upcoming : ()=> api.get("movie/upcoming"),
    popular : ()=> api.get('movie/popular'),
    movieDetail: (id)=> api.get(`movie/${id}`,{
        params : {
            append_to_response : 'videos'
        }
    }),
    search : (term)=>api.get('search/movie',{
        params : {
            query : term
        }
    })
}

export const tvApi ={
    topRated : () => api.get("tv/top_rated"),
    popular : () => api.get("tv/popular"),
    airing : ()=>api.get("tv/airing_today"),
    showDetail : (id)=> api.get(`tv/${id}`,{
        params : {
            append_to_response : 'videos'
        }
    }),
    search : (term)=>api.get('search/tv',{
        params : {
            query : term
        }
    })
}