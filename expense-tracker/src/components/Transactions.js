import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyle = makeStyles({
  component: {
    display: "flex",
    flexDirection: "column",
    "&>*": {
      marginTop: 20,
    },
  },
  button: {
    background: "#445a6f",
    color: "#fff",
    "&:hover": {
      background: "#445a9a",
    },
  },
});

const Transactions = ({ addTransactions }) => {
  const classes = useStyle();
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const newTransactions = () => {
    const transactions = {
      id: Math.floor(Math.random() * 10000),
      text: text,
      amount: +amount,
    };

    addTransactions(transactions);
  };

  return (
    <Box className={classes.component}>
      <Typography variant="h5">New Transactions</Typography>
      <TextField
        label="Enter Expense"
        onChange={(e) => setText(e.target.value)}
      />
      <TextField
        label="Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button
        variant="contained"
        className={classes.button}
        onClick={newTransactions}
      >
        Add new Transactions
      </Button>
    </Box>
  );
};

export default Transactions;
