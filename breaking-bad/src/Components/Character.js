import { Card, makeStyles, Tooltip, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
  img: {
    height: 500,
    width: "100%",
    objectFit: "cover",
  },
});

const Character = ({ item }) => {
  const classes = useStyle();
  return (
    <Card>
      <Tooltip
        title={
          <>
            <Typography>Name: {item.name} </Typography>
            <Typography>Real Name: {item.portrayed} </Typography>
            <Typography>Nickname: {item.nickname} </Typography>
            <Typography>Birthday: {item.birthday} </Typography>
            <Typography>Status: {item.status} </Typography>
          </>
        }
        arrow
      >
        <img src={item.img} alt="person" className={classes.img} />
      </Tooltip>
    </Card>
  );
};

export default Character;
