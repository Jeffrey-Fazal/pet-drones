import React from 'react'
// import ScreenThree from './ScreenThree';
// import ThankyouPage from './ThankyouPage';
import NavBar from './NavBar';
import CommunityArticles from './CommunityArticles';
import Header from './Header';
import SalesBar from './SalesBar';

class Home extends React.Component {
    render() {
        return (
            <div className='main'>
                <Header />
                <NavBar />
                <h2>Community Articles</h2>
                <CommunityArticles />
                <SalesBar />
                {/* ThankyouPage and ScreenThree to be used after subscribe component is used */}
            </div>
        )
    }
}

export default Home;