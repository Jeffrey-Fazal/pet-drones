import React, { Component } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

class CommunityArticle extends Component {
  render() {
    const { image, alt, text } = this.props;
    return (
      <Card sx={{ display: 'flex', alignItems: 'center', background: '#f8f8f8', marginBottom: 2 }}>
        <CardMedia component="img" image={image} alt={alt} sx={{ width: 80, height: 80, margin: 1 }} />
        <CardContent sx={{ flex: 1, padding: 2 }}>
          <Typography variant="h6" component="h2">
            {text}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="community-articles">
        <CommunityArticle image="./Images/dog.svg" alt="Pet care tips" text="Pet care tips for your little pilot!" />
        <CommunityArticle image="./Images/drones.svg" alt="Drone maintenance" text="How to maintain your drone!" />
        <CommunityArticle image="./Images/star.svg" alt="Government recommendations" text="NSW government health and safety recommendations" />
      </div>
    );
  }
}

export default App;
