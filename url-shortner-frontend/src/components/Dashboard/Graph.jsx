// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Legend,
//   Tooltip,
//   Filler,
// } from "chart.js";

// ChartJS.register(
//   BarElement,
//   Tooltip,
//   CategoryScale,
//   LinearScale,
//   Legend,
//   Filler
// );

// const Graph = ({ graphData }) => {
//   const labels = graphData?.map((item, i) => `${item.clickDate}`);
//   const userPerDaya = graphData?.map((item) => item.count);

//   const data = {
//     labels:
//      graphData.length > 0
//         ? labels
//         : ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
//     datasets: [
//       {
//         label: "Total Clicks",
//         data:
//          graphData.length > 0
//             ? userPerDaya
//             : [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1],
//         backgroundColor:
//          graphData.length > 0 ? "#3b82f6" : "rgba(54, 162, 235, 0.1)",
//         borderColor: "#1D2327",
//         pointBorderColor: "red",
//         fill: true,
//         tension: 0.4,
//         barThickness: 20,
//         categoryPercentage: 1.5,
//         barPercentage: 1.5,
//       },
//     ],
//   };

//   const options = {
//     maintainAspectRatio: false,
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true,
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: {
//           // stepSize: 1,
//           callback: function (value) {
//             if (Number.isInteger(value)) {
//               return value.toString();
//             }
//             return "";
//           },
//         },
//         title: {
//           display: true,
//           text: "Number Of Clicks",
//           font: {
//             family: "Arial",
//             size: 16,
//             weight: "bold",
//             color: "#FF0000",
//           },
//         },
//       },
//       x: {
//         beginAtZero: true,
//         // ticks: {
//         //   stepSize: 1,
//         // },
//         title: {
//           display: true,
//           text: "Date",
//           font: {
//             family: "Arial",
//             size: 16,
//             weight: "bold",
//             color: "#FF0000",
//           },
//         },
//       },
//     },
//   };

//   return <Bar className=" w-full" data={data} options={options}></Bar>;
// };

// export default Graph;


// ------------------------------------------

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
