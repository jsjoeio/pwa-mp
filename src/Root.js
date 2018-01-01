import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppBox from './AppBox';
import AppForm from './AppForm';

export default function App(props) {
    return (
        <Router>
            <main>
                <Route exact path="/" render={() => (
                    <AppBox
                        url='http://localhost:3001/api/apps'
                        pollInterval={2000}
                    />
                )}/>
                <Route exact path ="/form" component={AppForm} />
            </main>
        </Router>
    );
}
