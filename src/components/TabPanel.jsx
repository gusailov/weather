import React from 'react';
import PropTypes from 'prop-types';
import HourlyCards from "./HourlyCards";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';






function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}

        >
            {value === index && (
                <Box p={3}>
                    <Typography>Hourly Forecast</Typography>
                    <HourlyCards props={props} />
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default TabPanel;