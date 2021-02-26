import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BreakfastOrder from '../breakfastOrder/BreakfastOrder';
import LunchOrder from '../lunchOrder/LunchOrder';
import DinnerOrder from '../dinnerOrder/DinnerOrder';
import  './FullWidthTabs.css';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
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

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    flexGrow:1,
    
  },
}));

const FullWidthTabs = () => {
    const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar style={{marginLeft:'400px', boxShadow:'none', backgroundColor:'white'}} position="static" color="default">
        <Tabs 
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          centered
        >
          <Tab label="Breakfast" {...a11yProps(0)} />
          <Tab label="Lunch" {...a11yProps(1)} />
          <Tab label="Dinner" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      
        
       
        <TabPanel value={value} index={0} dir={theme.direction}>
        <BreakfastOrder></BreakfastOrder>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <LunchOrder></LunchOrder>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
         <DinnerOrder></DinnerOrder>
        </TabPanel>
     
    </div>
    );
};

export default FullWidthTabs;