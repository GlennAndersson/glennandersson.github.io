async function getWordsArray() {
  try {
    const response = await fetch(
      "https://ga-api.github.io/WebData/dividends.json",
    );
    const data = await response.json();
    const jsonData = JSON.stringify(data, null, 4);
    return data.map((item) => item.TotalDividend);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getWordsArray().then((wordsArray) => {
  options.series[0].data = wordsArray;
  chart.updateSeries(options.series);
});

async function getDatesArray() {
  try {
    const response = await fetch(
      "https://ga-api.github.io/WebData/dividends.json",
    );
    const data = await response.json();
    const jsonData = JSON.stringify(data, null, 4);
    return data.map((item) => item.Date);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getDatesArray().then((datesArray) => {
  options.xaxis.categories = datesArray;
  chart.updateOptions(options);
});

const apiUrl = "https://ga-api.github.io/WebData/dividends.json";
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const latestEntry = data[data.length - 1];
    const wordsCount = latestEntry.TotalDividend;
    document.getElementById("words-counter").textContent = wordsCount;
  })
  .catch((error) => console.error("Error:", error));

var options = {
  series: [
    {
      name: "Dividends",
      data: [],
    },
  ],
  noData: {
    text: "Loading...",
    offsetX: 0,
    offsetY: -55,
    style: {
      color: undefined,
      fontSize: "26px",
      fontFamily: undefined,
    },
  },
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
  // theme: {
  //   mode: "dark",
  //   monochrome: {
  //     enabled: true,
  //     color: "#008FFB",
  //     shadeTo: "dark",
  //     shadeIntensity: 0.65,
  //   },
  // },
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
            color: "#06dd00",
            opacity: 0.5,
          },
          {
            offset: 100,
            color: "#0013ff",
            opacity: 0.01,
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
    colors: ["#06c706"], // Changed stroke color to red
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
    categories: [],
  },
  tooltip: {
              x: {
                format: "MMM yyyy", // Displays Month and Year
              },
              theme: "dark", // Changed to dark theme for better visibility
              style: {
                fontSize: "18px", // Adjusted font size for better readability
                fontFamily: "Arial, sans-serif", // Changed font family for a cleaner look
                fontWeight: "bold", // Added bold text for emphasis
                color: "#ffffff", // Set text color to white for contrast
                padding: 0, // Remove extra padding
                textAlign: "left", // Align text to the left
              },
              marker: {
                show: false, // Display marker in tooltip
              },
              y: {
                formatter: (value) => `${value} SEK`, // Format Y-axis values with currency
                title: {
            formatter: () => ``, // Remove title to tooltip
                },
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

// Monthly Chart

var options2 = {
  chart: {
    type: 'bar',
    foreColor: "white",
    toolbar: {
      show: false // Removes the download button
    }
  },
  series: [{
    name: 'Dividends',
    data: []
  }],
  plotOptions: {
    bar: {
      colors: {
        ranges: [{
          from: 0,
          to: 1000,
           // Gradient will override this
            }]
                },
                distributed: false
              }
            },
            tooltip: {
              x: {
                format: "MMM 'yy",
              },
              theme: "dark", // Changed to dark theme for better visibility
              style: {
                fontSize: "16px", // Adjusted font size for better readability
                fontFamily: "Arial, sans-serif", // Changed font family for a cleaner look
                fontWeight: "bold", // Added bold text for emphasis
                color: "#ffffff", // Set text color to white for contrast
                padding: 0, // Remove extra padding
                textAlign: "left", // Align text to the left
              },
              marker: {
                show: false, // Display marker in tooltip
              },
              y: {
                formatter: (value) => `${value} SEK`, // Format Y-axis values with currency
                title: {
            formatter: () => ``, // Remove title to tooltip
                },
              },
            },
            xaxis: {
              type: 'datetime',
              labels: {
                format: 'MMM yyyy', // Displays Month and Year
      showDuplicates: false, // Prevents duplicate labels
      style: {
        colors: [],
        fontSize: '16px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 400,
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'vertical',
      shadeIntensity: 0.5,
      // Green at the top
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
      colorStops: [
        {
          offset: 50,
          color: '#06c706', // Dark blue at the bottom
          opacity: 0.9
        },
        {
          offset: 100,
          color: '#004d00', // Green at the top
          opacity: 0.8
        }
      ]
    }
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#fff'],
      fontSize: '18px',
      fontWeight: 'normal'
    }
  }
};

fetch("https://ga-api.github.io/WebData/dividends.json")
  .then((response) => response.json())
  .then((data) => {
    options2.series[0].data = data.map((item) => ({
      x: item.Date,
      y: item.MonthlyDividend
    }));
    options2.dataLabels.enabled = false; // Disable rendering the amount in the bars
    columnchart.updateOptions(options2);
  })
  .catch((error) => console.error("Error fetching data:", error));
var columnchart = new ApexCharts(document.querySelector("#column-chart"), options2);
columnchart.render();

// Yearly Chart

var options3 = {
  chart: {
    type: 'bar',
    foreColor: "white",
    toolbar: {
      show: false // Removes the download button
    }
  },
  series: [{
    name: 'Dividends',
    data: []
  }],
  plotOptions: {
    bar: {
      colors: {
        ranges: [{
          from: 0,
          to: 1000,
           // Gradient will override this
            }]
                },
                distributed: false
              }
            },
            tooltip: {
              x: {
                format: "yyyy",
              },
              theme: "dark", // Changed to dark theme for better visibility
              style: {
                fontSize: "18px", // Adjusted font size for better readability
                fontFamily: "Arial, sans-serif", // Changed font family for a cleaner look
                fontWeight: "bold", // Added bold text for emphasis
                color: "#ffffff", // Set text color to white for contrast
                padding: 0, // Remove extra padding
                textAlign: "left", // Align text to the left
              },
              marker: {
                show: false, // Display marker in tooltip
              },
              y: {
                formatter: (value) => `${value} SEK`, // Format Y-axis values with currency
                title: {
            formatter: () => ``, // Remove title to tooltip
                },
              },
            },
            xaxis: {
              type: 'datetime',
              labels: {
                format: 'yyyy', // Displays Month and Year
      showDuplicates: false, // Prevents duplicate labels
      style: {
        colors: [],
        fontSize: '18px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 400,
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'vertical',
      shadeIntensity: 0.5,
      // Green at the top
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
      colorStops: [
        {
          offset: 50,
          color: '#06c706', // Dark blue at the bottom
          opacity: 0.9
        },
        {
          offset: 100,
          color: '#004d00', // Green at the top
          opacity: 0.8
        }
      ]
    }
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#fff'],
      fontSize: '20px',
      fontWeight: 'bold'
    }
  }
};

fetch("https://ga-api.github.io/WebData/dividends.json")
  .then((response) => response.json())
  .then((data) => {
    const yearlyData = data.reduce((acc, item) => {
      const year = new Date(item.Date).getFullYear();
      if (!acc[year]) {
      acc[year] = 0;
      }
      acc[year] = item.TotalDividend;
      return acc;
    }, {});

    options3.series[0].data = Object.entries(yearlyData).map(([year, totalDividend]) => ({
      x: year,
      y: totalDividend
    }));
    columnchartyearly.updateOptions(options3);
  })
  .catch((error) => console.error("Error fetching data:", error));
var columnchartyearly = new ApexCharts(document.querySelector("#column-chart-yearly"), options2);
columnchartyearly.render();
