import React from "react";
import {collectionApi} from"../../api"


// eslint-disable-next-line
export default class extends React.Component {
    id = this.props.collection_id;
    
    render(){
        console.log(this.id);
        return (
            <div>
                
            </div>
        )
    }
}