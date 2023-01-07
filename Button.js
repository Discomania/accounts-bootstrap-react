import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

class Button extends React.Component {
  /* Default accounts-react button element */

  render () {
    const { onClick, text, social } = this.props

    return (
      <Button onClick={onClick} className={ social ? 'social-btn ' + social : ''}>
        {social ? 'Continue with ' + text[0].toUpperCase() + text.substr(1)
        : text}
      </Button>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
