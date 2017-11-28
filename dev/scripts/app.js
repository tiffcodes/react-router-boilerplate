import React from 'react';
import ReactDOM from 'react-dom';

class Catalogue extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        cat!
      </div>
    )
  }
}

class App extends React.Component {
    render() {
      return (
        <div>
          <header className='top-header'>
            <h1>HackFlix</h1>
            <nav>
              <a href="#">Catalogue</a>
            </nav>
          </header>
          <Catalogue />
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
