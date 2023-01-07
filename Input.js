import React from 'react';
import Form from 'react-bootstrap/Form';

const InputField = props => {
  const {
    _id,
    type,
    displayName,
    placeholder,
    onChange,
    focusInput,
    defaults,
    error
  } = props

  return (
    <div>

      {defaults.showLabels && <Form.Label>{displayName}</Form.Label>}
      <br />

      <Form.Control
        type={type}
        onChange={(e) => onChange(e, _id)}
        placeholder={defaults.showPlaceholders ? placeholder : ''}
        autoFocus={focusInput}
      />

      <br />
      {error && <Form.Control.Feedback type="invalid">{error.errStr}</Form.Control.Feedback>}

      <br />

    </div>
  )
}

export default InputField
