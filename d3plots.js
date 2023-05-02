
    var chart = c3.generate({
      bindto: '#chart1',
      padding: {
      top: 10,
      right: 10,
      bottom: 5,
      left: 30
      },
      size: {
        width: 600,
      height: 400
      },
      color: {
        pattern: ['#E6E6FA', '#000000']
      },

      data: {
        x: 'x',
        columns: [
          ['x', 2018, 2020, 2025, 2030],
          ['Carbon footprint (t CO2e)', 32700000, 32500000, 36500000, 40800000],
          ['Water footprint (thousand m3)', 9400000, 9600000, 11100000, 12800000]
        ],
        types: {
          'Carbon footprint (t CO2e)': 'line',
          'Water footprint (thousand m3)': 'line'
        }
      },
      axis: {
        x: {
          label: 'Year',
          tick: {
            count: 4,
            format: d3.format('d')
          }
        },
        y: {
          label: 'Carbon and Water Footprint',
          tick: {
            format: d3.format('.2s')
          }
        }
      }
    });



      var chart = c3.generate({
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 70,
        },
        size: {
        height: 400
        },
        bindto: '#chart2',
        data: {
          columns: [
            ['Clothing', 1070000, 1140000, 1320000, 1530000],
            ['HHD textiles', 295000, 310000, 360000, 420000],
            ['Footwear', 298000, 320000, 370000, 420000]
          ],
          type: 'bar',
          groups: [
            ['Clothing', 'HHD textiles', 'Footwear']
          ]
        },
        grid: {
          y: {
            show: true
          }
        },
        axis: {
          x: {
            type: 'category',
            categories: ['2018', '2020', '2025', '2030']
          },
          y: {
            label: {
              text: 'Units Sold',
              position: 'outer-middle'
            }
          }
        },
        legend: {
          position: 'right'
        },
        color: {
          pattern: ['#E6E6FA', '#808080', '#000000']
        },
        size: {
          width: 600,
          height: 400
        }
      });


      
