import React from 'react'
// import ScreenThree from './ScreenThree';
// import ThankyouPage from './ThankyouPage';
import NavBar from './NavBar';
import Subscribe from './Subscribe';
import CommunityArticles from './CommunityArticles';
import Header from './Header'

class Home extends React.Component {
    render() {
        return (
            <div className='main'>
                <Header />
                <NavBar />
                <Subscribe />
                <h2>Community Articles</h2>
                <CommunityArticles />
                {/* Figure out a way to use logic to present these when neeeded
                <ThankyouPage />
                <ScreenThree /> */}
            </div>
        )
    }
}

export default Home;