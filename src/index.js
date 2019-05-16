import React from 'react';
import ReactDOM from 'react-dom';
import {choice, remove} from './helpers';
import foods from './foods';


class App extends React.Component {
  render() {
    let randomFruit = choice(foods);
    let remaining = remove(foods, randomFruit);
    return (
      <div>
        <p>I'd like one {randomFruit} please</p>
        <p>Here you go, one {randomFruit}</p>
        <p>Delicious, may I have another?</p>
        <p>Sorry, we're all out. We have {remaining} left.</p>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
