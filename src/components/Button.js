import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  renderText(language) {
    return language === 'english' ? 'Submit' : 'Voorleggen';
  }

  render() {
    return (
        <button className="ui button primary">
          <LanguageContext.Consumer>
            {(value) => this.renderText(value)}
          </LanguageContext.Consumer>
        </button>
    );
  }
}

export default Button;
