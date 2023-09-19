// backgroundColor: "#092452",
// borderColor: "#777674",

// backgroundColor: "#e5e5e5",
// borderColor: "#7f7f7d",
var chartOne = document.getElementById("chart-1").getContext("2d");
var myBarChart = new Chart(chartOne, {
  type: "bar",
  data: {
    labels: [
      "Category 1",
      "Category 2",
      "Category 3",
      "Category 4",
      "Category 5",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "#092452",
        borderColor: "#777674",
      },
      {
        label: "Dataset 2",
        data: [7, 11, 5, 8, 14],
        backgroundColor: "#e5e5e5",
        borderColor: "#7f7f7d",
      },
    ],
  },
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: "X-Axis Title",
        },
        grid: {
          // display: false, // Hide x-axis grid lines
        },
        ticks: {
          maxRotation: 45, // Rotate x-axis labels by 45 degrees
          minRotation: 45,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Y-Axis Title",
        },
      },
    },
  },
});

// chart
// Number
// two
var chartTwo = document.getElementById("chart-2").getContext("2d");
var myBarChart = new Chart(chartTwo, {
  type: "line",
  data: {
    labels: [
      "Category 1",
      "Category 2",
      "Category 3",
      "Category 4",
      "Category 5",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "#092452",
        borderColor: "#777674",
      },
      {
        label: "Dataset 2",
        data: [7, 11, 5, 8, 14],
        backgroundColor: "#e5e5e5",
        borderColor: "#7f7f7d",
        borderWidth: 2, // Line width
        borderDash: [5, 5], // Defines a dashed pattern (5 pixels dash, 5 pixels gap)
        fill: false, // To prevent filling the area under the line
      },
    ],
  },
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: "X-Axis Title",
        },
        grid: {
          // display: false, // Hide x-axis grid lines
        },
        ticks: {
          maxRotation: 45, // Rotate x-axis labels by 45 degrees
          minRotation: 45,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Y-Axis Title",
        },
      },
    },
  },
});
