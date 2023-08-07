import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';

const Errors = ({ errors }) => {
	return errors.map((err, i) => (
		<Form.Control.Feedback type="invalid" key={i}>
			{err.errStr}
		</Form.Control.Feedback>
	))
}

Errors.propTypes = {
	errors: PropTypes.array.isRequired
}

export default Errors
