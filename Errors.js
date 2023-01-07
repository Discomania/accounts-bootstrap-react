import React from 'react'
import PropTypes from 'prop-types'

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
