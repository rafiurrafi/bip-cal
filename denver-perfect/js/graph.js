const chart1Context = document.getElementById("chart-1");

new Chart(chart1Context, {
  type: "bar",
  data: {
    labels: [
      "bachelor or higher",
      "Some college",
      "HS Grad or Equivalent",
      "Less then HS",
    ],
    datasets: [
      {
        label: "Cheeseman Park",
        data: [70, 30, 10, 5],
        borderWidth: 3,
        backgroundColor: "#092452",
        borderColor: "#777674",
      },
      {
        label: "Denver",
        data: [50, 20, 18, 10],
        borderWidth: 3,
        backgroundColor: "#e5e5e5",
        borderColor: "#7f7f7d",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        },
      },
      // x: [
      //   {
      //     id: "x-axis-1",
      //     type: "Category",
      //     ticks: {
      //       maxRotation: 45,
      //       minRotation: 45,
      //     },
      //   },
      //   {
      //     id: "x-axis-2",
      //     type: "Category",
      //     ticks: {
      //       maxRotation: 45,
      //       minRotation: 45,
      //     },
      //   },
      // ],
    },
    plugins: {
      // subtitle: {
      //   display: true,
      //   text: "Custom Chart Subtitle",
      // },
    },
  },
});
// chart 2
const chart2Context = document.getElementById("chart-2");

new Chart(chart2Context, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Cheeseman Park",
        data: [70, 30, 10, 5],
        borderWidth: 3,
        backgroundColor: "#092452",
        borderColor: "#777674",
        borderWidth: 2,
        borderDash: [5, 5],
      },
      {
        label: "Denver",
        data: [50, 20, 18, 10],
        borderWidth: 3,
        backgroundColor: "#e5e5e5",
        borderColor: "#7f7f7d",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
      x: [
        {
          ticks: {
            // autoSkip: false,
            maxRotation: 50,
            minRotation: 50,
          },
        },
      ],
    },
  },
});
