import React from 'react'
import PropTypes from 'prop-types'


const Spinner = ({ children }) => {
    return (
        <div className="ui icon message">
            <i className="notched circle loading icon" />
            <div className="content">
                <div className="header">{children}</div>
            </div>
        </div>
    )
}

Spinner.propTypes = {
    children: PropTypes.string.isRequired
}
Spinner.defaultProps = {
    children: "films loading"
}


export default Spinner
