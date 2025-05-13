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
      format: "MMM yyyy",
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
    type: 'category',
    labels: {
      formatter: (value) => {
      // Format the label as 'Jan 2025'
      const date = new Date(value);
      return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    },
    rotate: -45, // Rotate labels to prevent overlap
    style: {
      colors: [], // Default colors
      fontSize: '0px',
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontWeight: 0,
      },
    },
    group: {
      style: {
        fontSize: '18px',
        fontWeight: 500,
        colors: ['#ffffff']
      },
      groups: [
        {},
      ]
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'vertical',
      shadeIntensity: 0.5,
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
    // Extract unique years and count the number of months for each year
    const yearMonthCounts = data.reduce((acc, item) => {
      const year = new Date(item.Date).getFullYear();
      acc[year] = (acc[year] || 0) + 1; // Count the number of entries per year
      return acc;
    }, {});

    // Create the groups dynamically based on the actual number of months per year
    const groups = Object.entries(yearMonthCounts).map(([year, count]) => ({
      title: year.toString(),
      cols: count, // Use the actual number of months for the year
    }));

    // Update the x-axis group configuration
    options2.xaxis.group.groups = groups;

    // Map the data for the chart
    options2.series[0].data = data.map((item) => ({
      x: item.Date,
      y: item.MonthlyDividend,
    }));
    options2.dataLabels.enabled = false; // Disable rendering the amount in the bars
    // Update the chart with the new options
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
        }]
      },
      distributed: false
    }
  },
  tooltip: {
    x: {
      format: "yyyy", // Display year in the tooltip
    },
    theme: "dark",
    style: {
      fontSize: "18px",
      fontFamily: "Arial, sans-serif",
      fontWeight: "bold",
      color: "#ffffff",
      padding: 0,
      textAlign: "left",
    },
    marker: {
      show: false,
    },
    y: {
      formatter: (value) => `${value} SEK`, // Format Y-axis values with currency
      title: {
        formatter: () => ``,
      },
    },
  },
  xaxis: {
    type: 'category',
    labels: {
      formatter: (value) => value, // Display year as is
      rotate: -45, // Rotate labels to prevent overlap
      style: {
        colors: [],
        fontSize: '0px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 400,
      },
    },
    group: {
      style: {
        fontSize: '18px',
        fontWeight: 500,
        colors: ['#ffffff']
      },
      groups: [] // Groups will be dynamically updated
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'vertical',
      shadeIntensity: 0.5,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
      colorStops: [
        {
          offset: 50,
          color: '#06c706',
          opacity: 0.9
        },
        {
          offset: 100,
          color: '#004d00',
          opacity: 0.8
        }
      ]
    }
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#fff'],
      fontSize: '22px',
      fontWeight: 'normal'
    }
  }
};

fetch("https://ga-api.github.io/WebData/dividends.json")
  .then((response) => response.json())
  .then((data) => {
    // Aggregate yearly data
    const yearlyData = data.reduce((acc, item) => {
      const year = new Date(item.Date).getFullYear();
      if (!acc[year]) {
        acc[year] = 0;
      }
      acc[year] = item.TotalDividend; // Sum up dividends for each year
      return acc;
    }, {});

    // Create the groups dynamically based on the unique years
    const groups = Object.keys(yearlyData).map((year) => ({
      title: year.toString(), // Use the year as the group title
      cols: 1, // Use 1 column per year
    }));

    // Update the x-axis group configuration
    options3.xaxis.group.groups = groups;

    // Map the aggregated yearly data to the chart format
    options3.series[0].data = Object.entries(yearlyData).map(([year, totalDividend]) => ({
      x: year,
      y: totalDividend,
    }));

    // Update the chart with the new options
    columnchartyearly.updateOptions(options3);
  })
  .catch((error) => console.error("Error fetching data:", error));

var columnchartyearly = new ApexCharts(document.querySelector("#column-chart-yearly"), options3);
columnchartyearly.render();