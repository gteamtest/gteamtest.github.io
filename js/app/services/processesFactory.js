gTeamApp.factory('processesFactory',function(){

var processes;

$.ajax({
  url: "js/app/assets/processes_local.json",
  type: "GET",
  async: false,
  cache: false,
  success: function(data){
      processes = data.system.processes;
  },
  error: function(data){
  }

});

  factory = {};
  
  factory.getProcesses = function(){
    return processes;
  }
  return factory;
}
);  



