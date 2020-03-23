import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabGlobal from './tabs_nav/TabGlobal';
import TabDevices from './tabs_nav/TabDevices';
import TabOther from './tabs_nav/TabOther';
import TabContentOne from './TabContentOne';
import '../css/TabsNav.css';

class TabComponent extends Component {
    state = {
        tabIndex: 0
    }

    render() {
        return (
            <div>
                <Tabs 
                    className="tabs" 
                    selectedIndex={this.state.tabIndex} 
                    onSelect={tabIndex => this.setState({ tabIndex })}
                >
                    <TabList className="tab-nav-container">
                        <Tab className={`${this.state.tabIndex === 0 ? 'tab-selected active' : null}`}>
                            <TabGlobal />
                            <p>
                                <strong>Global Cases</strong>
                            </p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null}`}>
                            <TabDevices />
                            {/* marginTop: '-5.3125rem' */}
                            <p style={{marginTop: '-4.3125rem'}}>
                                <strong>Local Cases</strong>
                            </p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 2 ? 'tab-selected active' : null}`}>
                            <TabOther />
                            <p>
                                <strong>Other Information</strong>
                            </p>
                        </Tab>
                    </TabList>

                    {/* Tabs Content */}
                    <TabPanel>
                        <TabContentOne />
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default TabComponent;


