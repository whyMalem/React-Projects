import { Box, Divider, List, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Transaction from "./Transaction";

const useStyle = makeStyles({
  component: {
    "&>*": {
      marginBottom: 10,
    },
  },
});

const History = ({ transactions, delteTransaction }) => {
  const classes = useStyle();
  return (
    <Box className={classes.component}>
      <Typography>Transactions History</Typography>
      <Divider />
      <List>
        {transactions.map((transaction) => {
          return (
            <Transaction
              transaction={transaction}
              key={transaction.id}
              delteTransaction={delteTransaction}
            />
          );
        })}
      </List>
    </Box>
  );
};

export default History;
