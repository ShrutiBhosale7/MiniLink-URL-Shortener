import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, Tooltip, CategoryScale, LinearScale, Legend);

const Graph = ({ graphData }) => {
  const labels = graphData?.map((item) => item.clickDate);
  const values = graphData?.map((item) => item.count);

  const data = {
    labels: labels.length ? labels : Array(14).fill(""),
    datasets: [
      {
        label: "Total Clicks",
        data: values.length ? values : Array(14).fill(0),
        backgroundColor: "#219ebc",
        borderRadius: 4,
        barThickness: 20,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#f8fafc",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#f8fafc",
        },
        title: {
          display: true,
          text: "Number Of Clicks",
          color: "#f8fafc",
          font: { weight: "bold", size: 14 },
        },
      },
      x: {
        ticks: {
          color: "#f8fafc",
        },
        title: {
          display: true,
          text: "Date",
          color: "#f8fafc",
          font: { weight: "bold", size: 14 },
        },
      },
    },
  };

  return <Bar className="w-full" data={data} options={options} />;
};




export default Graph;


