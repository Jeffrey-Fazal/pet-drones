import React from 'react'
// import ScreenThree from './ScreenThree';
// import ThankyouPage from './ThankyouPage';
import NavBar from './NavBar';
// import Subscribe from './Subscribe';
import CommunityArticles from './CommunityArticles';
import Header from './Header';
import SalesBar from './SalesBar';
import FormNet from '../form';

class Home extends React.Component {
    render() {
        return (
            <div className='main'>
                <Header />
                <NavBar />
                {/* <Subscribe /> */}
                <FormNet />
                <h2>Community Articles</h2>
                <CommunityArticles />
                <SalesBar />
                {/* Figure out a way to use logic to present these when neeeded
                <ThankyouPage />
                <ScreenThree /> */}
            </div>
        )
    }
}

export default Home;