//****************************************charts*************************

// chaert.js

 const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Russia', 'India', 'ukraine', 'Canada', 'Brazil', 'China'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});



// chart.js


const chart2 = document.getElementById('chart2');
new Chart(chart2, {
    type: 'line',
    data: {
      labels: ['Russia', 'India', 'ukraine', 'Canada', 'Brazil', 'China'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  


// apex chart-dashboard


  var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
    type: 'donut',
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();


// apex chart dashboard

  var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
    type: 'donut',
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#pie"), options);
  chart.render();



  // charts page


// chart-1 ***********


  var options = {
    series: [{
    name: 'TEAM A',
    type: 'column',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  }, {
    name: 'TEAM B',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  }, {
    name: 'TEAM C',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }],
    chart: {
    height: 350,
    type: 'line',
    stacked: false,
  },
  stroke: {
    width: [0, 2, 5],
    curve: 'smooth'
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },
  
  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
    '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
  ],
  markers: {
    size: 0
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    title: {
      text: 'Points',
    },
    min: 0
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
  
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart-1"), options);
  chart.render();


// chart-2********************//


var options = {
  series: [{
  name: 'Marine Sprite',
  data: [44, 55, 41, 37, 22, 43, 21]
}, {
  name: 'Striking Calf',
  data: [53, 32, 33, 52, 13, 43, 32]
}, {
  name: 'Tank Picture',
  data: [12, 17, 11, 9, 15, 11, 20]
}, {
  name: 'Bucket Slope',
  data: [9, 7, 5, 8, 6, 9, 4]
}, {
  name: 'Reborn Kid',
  data: [25, 12, 19, 32, 25, 24, 10]
}],
  chart: {
  type: 'bar',
  height: 350,
  stacked: true,
},
plotOptions: {
  bar: {
    horizontal: true,
    dataLabels: {
      total: {
        enabled: true,
        offsetX: 0,
        style: {
          fontSize: '13px',
          fontWeight: 900
        }
      }
    }
  },
},
stroke: {
  width: 1,
  colors: ['#fff']
},
title: {
  text: 'Fiction Books Sales'
},
xaxis: {
  categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
  labels: {
    formatter: function (val) {
      return val + "K"
    }
  }
},
yaxis: {
  title: {
    text: undefined
  },
},
tooltip: {
  y: {
    formatter: function (val) {
      return val + "K"
    }
  }
},
fill: {
  opacity: 1
},
legend: {
  position: 'top',
  horizontalAlign: 'left',
  offsetX: 40
}
};

var chart = new ApexCharts(document.querySelector("#chart-2"), options);
chart.render();



// chart-3 ******************

var options = {
  series: [{
  name: 'Servings',
  data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
}],
  annotations: {
  points: [{
    x: 'Bananas',
    seriesIndex: 0,
    label: {
      borderColor: '#775DD0',
      offsetY: 0,
      style: {
        color: '#fff',
        background: '#775DD0',
      },
      text: 'Bananas are good',
    }
  }]
},
chart: {
  height: 350,
  type: 'bar',
},
plotOptions: {
  bar: {
    borderRadius: 10,
    columnWidth: '50%',
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  width: 0
},
grid: {
  row: {
    colors: ['#fff', '#f2f2f2']
  }
},
xaxis: {
  labels: {
    rotate: -45
  },
  categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
    'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
  ],
  tickPlacement: 'on'
},
yaxis: {
  title: {
    text: 'Servings',
  },
},
fill: {
  type: 'gradient',
  gradient: {
    shade: 'light',
    type: "horizontal",
    shadeIntensity: 0.25,
    gradientToColors: undefined,
    inverseColors: true,
    opacityFrom: 0.85,
    opacityTo: 0.85,
    stops: [50, 0, 100]
  },
}
};

var chart = new ApexCharts(document.querySelector("#chart-3 "), options);
chart.render();



// chart-4 ////////////////

var options = {
  series: [
  {
    type: 'rangeArea',
    name: 'Team B Range',

    data: [
      {
        x: 'Jan',
        y: [1100, 1900]
      },
      {
        x: 'Feb',
        y: [1200, 1800]
      },
      {
        x: 'Mar',
        y: [900, 2900]
      },
      {
        x: 'Apr',
        y: [1400, 2700]
      },
      {
        x: 'May',
        y: [2600, 3900]
      },
      {
        x: 'Jun',
        y: [500, 1700]
      },
      {
        x: 'Jul',
        y: [1900, 2300]
      },
      {
        x: 'Aug',
        y: [1000, 1500]
      }
    ]
  },

  {
    type: 'rangeArea',
    name: 'Team A Range',
    data: [
      {
        x: 'Jan',
        y: [3100, 3400]
      },
      {
        x: 'Feb',
        y: [4200, 5200]
      },
      {
        x: 'Mar',
        y: [3900, 4900]
      },
      {
        x: 'Apr',
        y: [3400, 3900]
      },
      {
        x: 'May',
        y: [5100, 5900]
      },
      {
        x: 'Jun',
        y: [5400, 6700]
      },
      {
        x: 'Jul',
        y: [4300, 4600]
      },
      {
        x: 'Aug',
        y: [2100, 2900]
      }
    ]
  },

  {
    type: 'line',
    name: 'Team B Median',
    data: [
      {
        x: 'Jan',
        y: 1500
      },
      {
        x: 'Feb',
        y: 1700
      },
      {
        x: 'Mar',
        y: 1900
      },
      {
        x: 'Apr',
        y: 2200
      },
      {
        x: 'May',
        y: 3000
      },
      {
        x: 'Jun',
        y: 1000
      },
      {
        x: 'Jul',
        y: 2100
      },
      {
        x: 'Aug',
        y: 1200
      },
      {
        x: 'Sep',
        y: 1800
      },
      {
        x: 'Oct',
        y: 2000
      }
    ]
  },
  {
    type: 'line',
    name: 'Team A Median',
    data: [
      {
        x: 'Jan',
        y: 3300
      },
      {
        x: 'Feb',
        y: 4900
      },
      {
        x: 'Mar',
        y: 4300
      },
      {
        x: 'Apr',
        y: 3700
      },
      {
        x: 'May',
        y: 5500
      },
      {
        x: 'Jun',
        y: 5900
      },
      {
        x: 'Jul',
        y: 4500
      },
      {
        x: 'Aug',
        y: 2400
      },
      {
        x: 'Sep',
        y: 2100
      },
      {
        x: 'Oct',
        y: 1500
      }
    ]
  }
],
  chart: {
  height: 350,
  type: 'rangeArea',
  animations: {
    speed: 500
  }
},
colors: ['#d4526e', '#33b2df', '#d4526e', '#33b2df'],
dataLabels: {
  enabled: false
},
fill: {
  opacity: [0.24, 0.24, 1, 1]
},
forecastDataPoints: {
  count: 2
},
stroke: {
  curve: 'straight',
  width: [0, 0, 2, 2]
},
legend: {
  show: true,
  customLegendItems: ['Team B', 'Team A'],
  inverseOrder: true
},
title: {
  text: 'Range Area with Forecast Line (Combo)'
},
markers: {
  hover: {
    sizeOffset: 5
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart-4"), options);
chart.render();



// chart-5 ////////////////////


var options = {
  series: [
  {
    name: 'box',
    type: 'boxPlot',
    data: [
      {
        x: new Date('2017-01-01').getTime(),
        y: [54, 66, 69, 75, 88]
      },
      {
        x: new Date('2018-01-01').getTime(),
        y: [43, 65, 69, 76, 81]
      },
      {
        x: new Date('2019-01-01').getTime(),
        y: [31, 39, 45, 51, 59]
      },
      {
        x: new Date('2020-01-01').getTime(),
        y: [39, 46, 55, 65, 71]
      },
      {
        x: new Date('2021-01-01').getTime(),
        y: [29, 31, 35, 39, 44]
      }
    ]
  },
  {
    name: 'outliers',
    type: 'scatter',
    data: [
      {
        x: new Date('2017-01-01').getTime(),
        y: 32
      },
      {
        x: new Date('2018-01-01').getTime(),
        y: 25
      },
      {
        x: new Date('2019-01-01').getTime(),
        y: 64
      },
      {
        x: new Date('2020-01-01').getTime(),
        y: 27
      },
      {
        x: new Date('2020-01-01').getTime(),
        y: 78
      },
      {
        x: new Date('2021-01-01').getTime(),
        y: 15
      }
    ]
  }
],
  chart: {
  type: 'boxPlot',
  height: 350
},
colors: ['#008FFB', '#FEB019'],
title: {
  text: 'BoxPlot - Scatter Chart',
  align: 'left'
},
xaxis: {
  type: 'datetime',
  tooltip: {
    formatter: function(val) {
      return new Date(val).getFullYear()
    }
  }
},
tooltip: {
  shared: false,
  intersect: true
}
};

var chart = new ApexCharts(document.querySelector("#chart-5"), options);
chart.render();



// chart-6 '//////////////


var options = {
  series: [76, 67, 61, 90],
  chart: {
  height: 390,
  type: 'radialBar',
},
plotOptions: {
  radialBar: {
    offsetY: 0,
    startAngle: 0,
    endAngle: 270,
    hollow: {
      margin: 5,
      size: '30%',
      background: 'transparent',
      image: undefined,
    },
    dataLabels: {
      name: {
        show: false,
      },
      value: {
        show: false,
      }
    },
    barLabels: {
      enabled: true,
      useSeriesColors: true,
      margin: 8,
      fontSize: '16px',
      formatter: function(seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
      },
    },
  }
},
colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
responsive: [{
  breakpoint: 480,
  options: {
    legend: {
        show: false
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chart-6"), options);
chart.render();



  

  
