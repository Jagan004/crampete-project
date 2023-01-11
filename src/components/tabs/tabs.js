import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import HoverRating from '../rating/rating';
import './tab.css'


function ControlledTabsExample({ specification }) {
    const [key, setKey] = useState('home');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 w-50 main-tab"
        >
            <Tab eventKey="home" title="specification" className="cotent">
                <h1>{specification}</h1>
            </Tab>
            <Tab eventKey="profile" title="review">
                <HoverRating/>
            </Tab>
        </Tabs>
    );
}

export default ControlledTabsExample;