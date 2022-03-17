import {
  Box,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
  component: {
    display: "flex",
    "&>*": {
      padding: 10,
      flex: 1,
    },
  },
  income: {
    color: "green",
  },
  expense: {
    color: "red",
  },
});

const ExpenseCard = ({ transactions }) => {
  const classes = useStyle();
  const amount = transactions.map((transaction) => transaction.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((accum, item) => (accum += item), 0)
    .toFixed(2);

  const expense = amount
    .filter((item) => item < 0)
    .reduce((accum, item) => (accum += item), 0)
    .toFixed(2);
  return (
    <Box className={classes.component}>
      <Card>
        <CardContent>
          <Typography>Income</Typography>
          <Typography className={classes.income}>₹{income}</Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography>Expense</Typography>
          <Typography className={classes.expense}>
            ₹{Math.abs(expense)}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ExpenseCard;
