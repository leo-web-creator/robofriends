import React from 'react'

const Scroll = (props) => {
    return (
        // Double curly braces "{{ }}" to make style expression inside a JSX statement
        // Create a SCROLLING FEATURE for the props.children (the TAG that is inside the <SCROLL> tag at app.js
        // - that is the <CardList> TAG)
        <div style={{overflowY: 'scroll', border: '3px solid black', height: '800px' }}> 
            {props.children}
        </div>
    );
};

export default Scroll

