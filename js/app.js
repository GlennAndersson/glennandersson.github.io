var options = {
  series: [
    {
      name: "Words",
      data: [0, 40, 45, 51, 69, 109, 125],
    },
  ],
  chart: {
    height: "auto",
    type: "area",
    foreColor: "white",
    zoom: {
      enabled: false,
    },
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
  theme: {
    mode: "light",
    monochrome: {
      enabled: true,
      color: "#008FFB",
      shadeTo: "light",
      shadeIntensity: 0.65,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0.5,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: false,
      opacityFrom: 0.1,
      opacityTo: 1,
      stops: [0, 50, 100],
      colorStops: [
        [
          {
            offset: 0,
            color: "#008FFB",
            opacity: 0.5,
          },
          {
            offset: 100,
            color: "#7d00ff",
            opacity: 0.1,
          },
        ],
      ],
    },
  },
  grid: {
    show: true,
    borderColor: "#4c4c4c",
    strokeDashArray: 5,
    position: "back",
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
    row: {
      colors: undefined,
      opacity: 0.5,
    },
    column: {
      colors: undefined,
      opacity: 0.5,
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 5,
    },
  },

  // markers: {
  //   size: 10,
  //   colors: undefined,
  //   strokeColors: "#fff",
  //   strokeWidth: 2,
  //   strokeOpacity: 0.9,
  //   strokeDashArray: 0,
  //   fillOpacity: 1,
  //   discrete: [],
  //   shape: "circle",
  //   radius: 2,
  //   offsetX: 0,
  //   offsetY: 0,
  //   onClick: undefined,
  //   onDblClick: undefined,
  //   showNullDataPoints: true,
  //   hover: {
  //     size: undefined,
  //     sizeOffset: 3,
  //   },
  // },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    colors: undefined,
    width: 4,
    dashArray: 0,
  },
  yaxis: {
    show: true,
    showAlways: true,
    showForNullSeries: true,
    seriesName: undefined,
    opposite: false,
    reversed: false,
    logarithmic: false,
    logBase: 10,
    tickAmount: undefined,
    min: undefined,
    max: undefined,
    stepSize: undefined,
    forceNiceScale: false,
    floating: false,
    decimalsInFloat: undefined,
    labels: {
      show: true,
      align: "right",
      minWidth: 0,
      maxWidth: 160,
      style: {
        colors: [],
        fontSize: "14px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: 400,
        cssClass: "apexcharts-yaxis-label",
      },
    },
  },
  xaxis: {
    type: "datetime",
    labels: {
      show: true,
      rotate: -45,
      rotateAlways: false,
      hideOverlappingLabels: true,
      showDuplicates: false,
      trim: false,
      minHeight: undefined,
      maxHeight: 120,
      style: {
        colors: [],
        fontSize: "14px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: 400,
        cssClass: "apexcharts-xaxis-label",
      },
    },
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
      format: "yyyy/MM/dd",
    },
    theme: false,
    style: {
      fontSize: "18px",
      fontFamily: undefined,
    },
  },

  // tooltip: {
  //   enabled: true,
  //   enabledOnSeries: undefined,
  //   shared: true,
  //   followCursor: false,
  //   intersect: false,
  //   inverseOrder: false,
  //   custom: undefined,
  //   hideEmptySeries: true,
  //   fillSeriesColor: false,
  //   theme: false,
  //   style: {
  //     fontSize: "12px",
  //     fontFamily: undefined,
  //   },
  //   onDatasetHover: {
  //     highlightDataSeries: false,
  //   },
  //   x: {
  //     show: true,
  //     format: "dd MMM",
  //     formatter: undefined,
  //   },
  //   y: {
  //     formatter: undefined,
  //     title: {
  //       formatter: (seriesName) => seriesName,
  //     },
  //   },
  //   z: {
  //     formatter: undefined,
  //     title: "Size: ",
  //   },
  //   marker: {
  //     show: true,
  //   },
  //   items: {
  //     display: flex,
  //   },
  //   fixed: {
  //     enabled: false,
  //     position: "topRight",
  //     offsetX: 0,
  //     offsetY: 0,
  //   },
  // },
};

var chart = new ApexCharts(document.querySelector("#area-chart"), options);
chart.render();
