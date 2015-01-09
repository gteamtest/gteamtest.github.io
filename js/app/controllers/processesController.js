gTeamApp.controller('processesController',["$scope", "processesFactory",function ($scope,processesFactory){

  $scope.processes = processesFactory.getProcesses();

   $scope.showDetailsToggle = function(process,event){

    //toggle only if clicked by mouse or 'enter' key pressed 
    if((event.type== 'keypress' && event.charCode== 13) || event.type=='click'){
      if(process.state !="pending"){
        if(process.showDetails != undefined){
          process.showDetails = !process.showDetails;
        }else{
          process.showDetails = false;
          process.showDetails = !process.showDetails;
          
        }
      }
    }
  };

  $scope.getAbstration = function(process,type){
      abstration = "";
      $.each( process.checklist.tests.unit, function( key, value ) {
        abstration += "<strong>"+key + "</strong>: " + value + "</br>";
      });
    return abstration;
  }
  
  $scope.testsPassedPrecents = function(process,testType){
    var total = parseInt(process.checklist.tests[testType].total),
        finished = parseInt(process.checklist.tests[testType].finished),
        remaining = total - finished;

    return ( parseInt((remaining / total) * 100) + "%");
  }
}]);