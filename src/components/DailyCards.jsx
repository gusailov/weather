import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tab, Tabs, Typography, Paper } from '@material-ui/core';
import DailyCard from './DailyCard';


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
  indicator: {
    opacity: 0,
  },
}));

export default function DailyCards(props) {
  const { forecast, lang } = props;
  const daily = forecast.daily;
  const classes = useStyles();
  const [value, setValue] = React.useState(daily[0].dt);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div className={classes.root}>
      <Paper elevation={2} style={{ padding: '1rem' }}>
        <Typography gutterBottom={true} variant="button" component="p">
          Daily Forecast
</Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons='desktop'
          aria-label="scrollable auto tabs example"
          classes={{
            indicator: classes.indicator
          }}
        >
          {daily.map((item) =>
            <Tab disabled key={item.dt} value={item.dt} label=
              {< DailyCard lang={lang} value={item.dt} forecast={item} index={item.dt} />}
              {...a11yProps(0)}


            />,

          )}

        </Tabs>
      </Paper>
    </div >
  );
}
