import React from 'react';
import UserCreate from './UserCreate';

class App extends React.Component {
  state = {language: 'english'};

  render() {
    return (
        <div className="ui container">
          <div>
            Select a language:
            <i className="flag us" onClick={() => this.onLanguageChange('english')}/>
            <i className="flag nl" onClick={ () => this.onLanguageChange('dutch')}/>
          </div>

          <UserCreate/>
        </div>
    );
  }

  onLanguageChange = (newLanguage) => {
    this.setState({language: newLanguage});
  };
}

export default App;
