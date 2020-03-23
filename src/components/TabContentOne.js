import React from 'react'
import styled from 'styled-components';
import MapInfo from './MapInfo';
import { Button } from './Button';

function TabContentOne() {
    return (
        <TabContentContainer>
            <div className="container">
                <div className="tab-content">
                    <span>
                        <h1>Chile Status</h1>
                        Chile actual confirmed, recovered and deaths
                    </span>
                    <br/>
                    {/* <Button style={{marginTop: '2rem'}}>more info</Button> */}
                    {/* Map Here Next!... */}
                    <MapInfo />
                    Data collected from ...
                </div>
            </div>
        </TabContentContainer>
    )
}

export default TabContentOne;

// Main Content Container
const TabContentContainer = styled.div`
    background: var(--main--deep-dark);

    .container {
        margin: 0 10%;
    }

    .tab-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        align-items: center;
        font-siz: 2rem;
        padding: 2.5rem;
    }
`;
