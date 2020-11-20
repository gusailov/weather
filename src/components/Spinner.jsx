import React from 'react'
import PropTypes from 'prop-types'


const Spinner = ({ children }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">{children}</span>
      </div>
    </div>
  )
}

Spinner.propTypes = {
  children: PropTypes.string.isRequired
}
Spinner.defaultProps = {
  children: "LOADING"
}


export default Spinner
