import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';

class RadioField extends React.Component {

  componentDidMount () {

    const {
      _id,
      options,
      onChange
    } = this.props

    const defaultOption = options.filter(o => o.default)[0]
    if (defaultOption) {

      // let parent know that this field has a default value
      onChange(defaultOption.value, _id)
    }
  }

  render () {

    const {
      _id,
      displayName,
      options,
      error,
      values,
      defaults
    } = this.props

    return (

      <div>

        {defaults.showLabels && <Form.Label>{displayName}</Form.Label>}
        <br />

        {options.map((option, i) => (
          <React.Fragment key={i}>
            <Form.Control
              type='radio'
              value={option.value}
              checked={values[_id] === option.value}
              onChange={this.handleChange}
            />
            <Form.Label>{option.text}</Form.Label>
            <br />
          </React.Fragment>
        ))}

        <br />
        {error && <Form.Control.Feedback type="invalid">{error.errStr}</Form.Control.Feedback>}

      </div>
    )
  }

  handleChange = e => {

    const {
      _id,
      onChange
    } = this.props

    onChange(e, _id)
  }
}

RadioField.propTypes = {
  component: PropTypes.element,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string
}

RadioField.defaultProps = {
  type: 'text'
}

export default RadioField
