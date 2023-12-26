import React from 'react';
import PropTypes from 'prop-types';
import Rbutton from 'react-bootstrap/Button';

class Button extends React.Component {
  /* Default accounts-react button element */

  render () {
    const { onClick, text, social, type } = this.props

    return (
      <Rbutton onClick={onClick} className={ social ? 'social-btn mb-2 me-2 ' + social : 'mb-2'} type={type}>
        {social ? 'Continue with ' + text[0].toUpperCase() + text.substr(1)
        : text}
      </Rbutton>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
