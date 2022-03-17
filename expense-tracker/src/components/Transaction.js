import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";

const useStyle = makeStyles({
  list: {
    marginTop: 10,
    border: "1px solid #f6f6f6",
  },
});

const Transaction = ({ transaction, delteTransaction }) => {
  const classes = useStyle();
  const color = transaction.amount >= 0 ? "green" : "red";
  const sign = transaction.amount >= 0 ? "₹" : "-₹";
  const amount = sign + Math.abs(transaction.amount);
  return (
    //   <Box></Box>
    <ListItem
      className={classes.list}
      style={{ background: `${color}`, color: "#fff" }}
    >
      <ListItemIcon>
        <Delete onClick={() => delteTransaction(transaction.id)} />
      </ListItemIcon>
      <ListItemText primary={transaction.text} />
      <ListItemText primary={amount} />
    </ListItem>
  );
};

export default Transaction;
