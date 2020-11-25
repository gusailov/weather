import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Tab, Tabs, Typography, Paper } from '@material-ui/core';
import HourlyCard from './HourlyCard';
import { useTranslation } from 'react-i18next';



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
  disabled: {
    color: 'red',
  },
}));
function HourlyCards(props) {
  const { forecast, lang } = props;
  const hourly = forecast.hourly;
  const classes = useStyles();
  const [value, setValue] = React.useState(hourly[0].dt);
  const { t } = useTranslation();


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div className={classes.root}>
      <Paper elevation={2} style={{ padding: '1rem' }}>
        <Typography variant="button" component="p">
          {t('Hourly Forecast')}

        </Typography>

        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"

          classes={{
            indicator: classes.indicator,

          }}
        >
          {hourly.map((item) =>

            <Tab disabled key={item.dt} value={item.dt} label=
              {< HourlyCard lang={lang} forecast={item} index={item.dt} />}

              {...a11yProps(0)}
            />
          )}

        </Tabs>
      </Paper>
    </div >

  );
}

export default HourlyCards;
