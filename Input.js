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
		<Form.Group className="mb-3">

			{defaults.showLabels && <Form.Label>{displayName}</Form.Label>}

			<Form.Control
				type={type}
				onChange={(e) => onChange(e, _id)}
				placeholder={defaults.showPlaceholders ? placeholder : ''}
				autoFocus={focusInput}
			/>

			{error && <Form.Control.Feedback type="invalid">{error.errStr}</Form.Control.Feedback>}

		</Form.Group>
	)
}

export default InputField
