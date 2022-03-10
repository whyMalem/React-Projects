import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import {
  LocationOn,
  SettingsBrightness,
  Opacity,
  Brightness5,
  Brightness6,
  Dehaze,
  Cloud,
} from "@material-ui/icons";
// import {SettingsBrightness} from "@material-ui/icons";

const useStyles = makeStyles({
  component: {
    // backgroundColor: "cyan",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 50,
  },
  row: {
    padding: 10,
    fontSize: 20,
    letterSpacing: 2,
    display: "flex",
    alignItems: "center",
    width: "60%",
  },
  value: {
    color: "#f9f9f9",
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});

const WeatherDetail = ({ data }) => {
  const classes = useStyles();
  // console.log(data.length);
  const { name, sys, main, weather, clouds } = data;
  return (
    data && (
      // <h1>Helllo</h1>
      <Box className={classes.component}>
        <Typography className={classes.row}>
          <LocationOn className={classes.icon} />
          Location:{" "}
          <span className={classes.value}>
            {name}, {sys.country}
          </span>
        </Typography>

        <Typography className={classes.row}>
          <SettingsBrightness className={classes.icon} />
          Temperature: <span className={classes.value}>{main.temp}°C </span>
        </Typography>

        <Typography className={classes.row}>
          <Opacity className={classes.icon} />
          Humidity: <span className={classes.value}>{main.humidity}%</span>
        </Typography>

        <Typography className={classes.row}>
          <Brightness5 className={classes.icon} />
          Sunrise:
          <span className={classes.value}>
            {new Date(sys.sunrise * 1000).toLocaleTimeString()}
          </span>
        </Typography>

        <Typography className={classes.row}>
          <Brightness6 className={classes.icon} />
          Sunset:
          <span className={classes.value}>
            {new Date(sys.sunset * 1000).toLocaleTimeString()}
          </span>
        </Typography>

        <Typography className={classes.row}>
          <Dehaze className={classes.icon} />
          Condition: <span className={classes.value}>{weather[0].main}</span>
        </Typography>

        <Typography className={classes.row}>
          <Cloud className={classes.icon} />
          Clouds: <span className={classes.value}>{clouds.all}</span>{" "}
        </Typography>
      </Box>
    )
  );
};

export default WeatherDetail;
