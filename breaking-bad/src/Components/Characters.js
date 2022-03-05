import { Grid, Box } from "@material-ui/core";
import React from "react";
import Character from "./Character";

const Characters = ({ data }) => {
  return (
    <>
      <Box style={{ margin: 20 }}>
        <Grid container spacing={4}>
          {data.map((item) => {
            return (
              <Grid item xs={3}>
                <Character item={item} key={item.char_id} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Characters;
