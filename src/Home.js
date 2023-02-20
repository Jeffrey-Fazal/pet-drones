import React from 'react'
import ScreenThree from './components/ScreenThree';
import ThankyouPage from './components/ThankyouPage';
import CommunityArticles from './components/CommunityArticles';
import NavBar from './components/NavBar';
import Subscribe from './components/Subscribe';

class Home extends React.Component {
    render() {
        return (
            <div className='main'>
                <h1>Pet Drones</h1>
                <NavBar />
                <Subscribe />
                <CommunityArticles />
                {/* Figure out a way to use logic to present these when neeeded
                <ThankyouPage />
                <ScreenThree /> */}
            </div>
        )
    }
}

export default Home;