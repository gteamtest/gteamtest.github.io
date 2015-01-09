gTeamApp.directive('customgooglechart', function(){
    return {
        scope: {
          chartelement:"="
        },
        link: function(s,e,a){
          var type = a.charttype,
              process = s.chartelement,
              total = parseInt(process.checklist.tests[type].total),
              finished = parseInt(process.checklist.tests[type].finished),
              fail = total - finished;

              // Create the data table.
              var data = new google.visualization.DataTable();
              data.addColumn('string', 'code');
              data.addColumn('number', 'number');
              data.addRows([
                ['success', finished],
                ['fail', fail]

              ]);

              // Set chart options
              var options = {
                   'backgroundColor': 'none',
                   'fontSize':'13',
                   'chartArea':{left:'5%',top:'5%',width:'90%',height:'140'},
                   'legend': {position: 'bottom'},
                    colors: ['#5a9e00','#b31f1f']
                  };

              // Instantiate and draw our chart, passing in some options.
              var chart = new google.visualization.PieChart(e[0]);
              chart.draw(data, options);
        }
    }
});
