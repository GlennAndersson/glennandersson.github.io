console.log("Testing JS");

var options = {
  series: [
    {
      name: "series1",
      data: [0, 40, 45, 51, 69, 109, 125],
    },
  ],
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2019-09-12",
      "2019-09-14",
      "2019-09-15",
      "2019-09-16",
      "2019-09-18",
      "2019-09-19",
      "2019-09-20",
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
};

var chart = new ApexCharts(document.querySelector("#area-chart"), options);
chart.render();
