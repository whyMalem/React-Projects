import {
  Box,
  Typography,
  makeStyles,
  CircularProgress,
  Grid,
} from "@material-ui/core";
import React from "react";
import Card from "./Card";

const useStyle = makeStyles({
  subHeading: {
    color: "green",
    letterSpacing: 2,
    marginBottom: 10,
  },
  component: {
    margin: "50px 0",
    // background: "cyan",s
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const Cards = ({ data, country }) => {
  const { confirmed, recovered, deaths, lastUpdate } = data;
  const classes = useStyle();

  if (!confirmed) {
    return <CircularProgress />;
  }

  return (
    <Box className={classes.component}>
      <Typography variant="h5" className={classes.subHeading}>
        {country
          ? `Corona Virus Cases in ${country}`
          : `Corona Virus Cases Globally`}
      </Typography>

      <Grid container spacing={3} justify="center">
        <Card
          cardTitle="Confirmed"
          value={confirmed.value}
          desc="Number of Infected Cases of Covid-19"
          lastUpdate={lastUpdate}
        />
        <Card
          cardTitle="Recovered"
          value={recovered.value}
          desc="Number of Recovered Cases from Covid-19"
          lastUpdate={lastUpdate}
        />
        <Card
          cardTitle="Deaths"
          value={deaths.value}
          desc="Number of Deaths Caused by Covid-19"
          lastUpdate={lastUpdate}
        />
      </Grid>
    </Box>
  );
};

export default Cards;
