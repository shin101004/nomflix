import React, { Component } from 'react';

class Star extends Component {
    render() {
        const rating = this.props.rating;
        const rows = [];
        for(let i=0;i<rating/2-1;i++) {
            rows.push("⭐️");
        }
        return (
            <>
                {rows}
            </>
        );
    }
}

export default Star;
