import React from 'react';
import HOME_IMAGE from './home-image.jpeg';

const Home = () => (
  <div className="home">
    <h1>Fine Coffee Co.</h1>
    <p>
      This is an example website.
    </p>
    <img alt="Coffee Beans" src={HOME_IMAGE} />
    <p>
      We sell coffee beans. Finest quality.
    </p>
    <button>
      Buy online now!
    </button>
  </div>
);

export default Home;