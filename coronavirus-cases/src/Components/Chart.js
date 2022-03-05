import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { Box, makeStyles } from "@material-ui/core";
Chart.register(...registerables);

const useStyle = makeStyles({
  container: {
    width: "75%",
    marginTop: 20,
  },
});

const ChartComponent = ({ data }) => {
  const classes = useStyle();
  const { confirmed, recovered, deaths } = data;
  console.log(confirmed);
  return (
    <Box className={classes.container}>
      {confirmed ? (
        <Bar
          data={{
            labels: ["Infected", "Recovered", "Deaths"],
            datasets: [
              {
                label: "Current Stage in the Country",
                data: [confirmed.value, recovered.value, deaths.value],
                backgroundColor: [
                  "rgba(0, 0, 255, 0.5)",
                  "rgba(0, 255, 0, 0.5)",
                  "rgba(255, 0, 0, 0.5)",
                ],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: "Current State in Country" },
          }}
        />
      ) : (
        ""
      )}
    </Box>
  );
};

export default ChartComponent;
