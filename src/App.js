import React from 'react';
import './App.css';
import AdaptiveCard from 'react-adaptivecards'

// see http://adaptivecards.io/samples/ for inspiration
var card = {
    "type": "AdaptiveCard",
    "version": "1.0",
    "body": [{
        "type": "TextBlock",
        "text": "Here is a ninja cat"
    }, {
        "type": "Image",
        "url": "http://adaptivecards.io/content/cats/1.png"
    }]
};

const app = () => (
    <div style={{ margin: '50px 0', padding: '0 50px' }}>
        <h2>React - Adaptive Cards Example</h2>
        <AdaptiveCard payload={card} style={{ border: '1px solid black' }} />
    </div>
)

export default app;
