import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel';
import DailyCard from './DailyCard';
import { dateFormat } from "../utils";



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
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto(props) {
  const { forecast } = props;
  const daily = forecast.daily;
  const classes = useStyles();
  const [value, setValue] = React.useState(daily[0].dt);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

      <AppBar position="static" color="default">
        <p className="card-title">Daily Forecast</p>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {daily.map((item) =>

            <Tab key={item.dt} value={item.dt} label={<p >
              {<DailyCard forecast={forecast} index={item.dt} />}

            </p>}

              icon={dateFormat(item.dt, props.lang)} {...a11yProps(0)} />

          )}

        </Tabs>
      </AppBar>
      {
        daily.map((item) => <TabPanel variant="scrollable" forecast={forecast} key={item.dt} value={value} index={item.dt}>
          {dateFormat(item.dt, props.lang)}
        </TabPanel>)
      }



    </div >
  );
}
