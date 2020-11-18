import React from "react";
import { dateFormatHourly } from "../utils";
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HourlyCard from './HourlyCard';



function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
}));
function HourlyCards(props) {
  const { forecast, lang } = props;
  const hourly = forecast.hourly;
  const classes = useStyles();
  const [value, setValue] = React.useState(hourly[0].dt);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <p className="card-title">Hourly Forecast</p>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"

      >
        {hourly.map((item) =>

          <Tab key={item.dt} value={item.dt} label=
            {< HourlyCard lang={lang} forecast={item} index={item.dt} />}

            icon={dateFormatHourly(item.dt, lang)} {...a11yProps(0)}
          />
        )}

      </Tabs>
    </div >
  );
}

export default HourlyCards;
