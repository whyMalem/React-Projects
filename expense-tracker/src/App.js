import "./App.css";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Balance from "./components/Balance";
import ExpenseCard from "./components/ExpenseCard";
import Transactions from "./components/Transactions";
import History from "./components/History";
import { useState } from "react";

const useStyle = makeStyles({
  header: {
    color: "mediumpurple",
    // opacity: 0.6,
    fontSize: 35,
    margin: "10px 0",
    textTransform: "uppercase",
  },
  component: {
    background: "#fff",
    // background: "cyan",
    width: 800,
    padding: 10,
    borderRadius: 20,
    display: "flex",
    "&>*": {
      flex: 1,
      padding: 10,
      // height: "70vh",
    },
  },
});

function App() {
  const classes = useStyle();
  const [transactions, setTransactions] = useState([
    { id: 1, text: "momos", amount: -20 },
    { id: 2, text: "chai", amount: -10 },
    { id: 3, text: "salary", amount: 3000 },
    { id: 4, text: "book", amount: -200 },
    { id: 5, text: "bonus", amount: 1500 },
  ]);

  const delteTransaction = (id) => {
    setTransactions(transactions.filter((trans) => trans.id !== id));
  };

  const addTransactions = (transaction) => {
    setTransactions([...transactions, transaction]);
    // console.log(transaction);
    // setTransactions((transactions) => [...transactions, transaction]);
  };

  return (
    <div className="App">
      <Typography className={classes.header}>Expense Tracker</Typography>
      <Box className={classes.component}>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} />
          <Transactions addTransactions={addTransactions} />
        </Box>

        <Box>
          <History
            transactions={transactions}
            delteTransaction={delteTransaction}
          />
        </Box>
      </Box>
    </div>
  );
}

export default App;
