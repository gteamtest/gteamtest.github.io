gTeamApp.factory('processesFactory',function(){
var processes2 = [
  {
    "type":"build",
    "changelist":"Tenrox-R1_1235",
    "owner":"",
    "timeStarted":"",
    "state": "pending",
    "results":"completed",
    "checklist":{
      "metrics": {
        "state": "pending",
        "test":64,
        "maintainability":{
          "amount":53,
          "direction":"up"
        },
        "security":64,
        "workmanship":72
      },
      "build":{
        "state": "pending",
        "debug":true,
        "release":true,
        "date":"2014-04-16T22:00:00.000Z"
      },
      "tests":{
      "unit":{
        "state": "pending",
        "total":152,
        "finished":142,
        "code":300,
        "covered":288,
      },
      "functional":{
        "state": "pending",
        "total":6466,
        "finished":4321,
        "code":5000,
        "covered":1150
      },
    }
    }
  },
  {
    "showDetails":true,
    "type":"firewall",
    "changelist":"432462",
    "owner":"jtuck",
    "timeStarted":"2014-04-16T22:00:00.000Z",
    "state": "running",
    "results":"running",
    "checklist":{
      "metrics": {
        "state": "running",
        "test":{
          "amount":64,
          "direction":"up" //all direction should be refactored and calculated based on the amount, if more than 50%
        },
        "maintainability":{
          "amount":53,
          "direction":"down"
        },
        "security":{
          "amount":53,
          "direction":"left"
        },
        "workmanship":{
          "amount":53,
          "direction":"right"
        }
      },
      "build":{
        "state": "pending",
        "debug":false,
        "release":true,
        "date":"2014-04-16T22:00:00.000Z"
      },
      "tests":{
      "unit":{
        "state": "pending",
        "total":152,
        "finished":142,
        "code":300,
        "covered":288,
      },
      "functional":{
        "state": "pending",
        "total":6466,
        "finished":4321,
        "code":5000,
        "covered":1150
      },
    }
    }
  },
  {
    "type":"firewall",
    "changelist":"432461",
    "owner":"samy",
    "timeStarted":"2014-04-16T22:00:00.000Z",
    "state": "rejected",
    "results":"rejected",
    "checklist":{
      "metrics": {
        "state": "rejected",
        "test":{
          "amount":64,
          "direction":"up" //all direction should be refactored and calculated based on the amount, if more than 50%
        },
        "maintainability":{
          "amount":53,
          "direction":"down"
        },
        "security":{
          "amount":53,
          "direction":"left"
        },
        "workmanship":{
          "amount":53,
          "direction":"right"
        }
      },
      "build":{
        "state": "accepted",
        "debug":true,
        "release":true,
        "date":"2014-04-16T22:00:00.000Z"
      },
      "tests":{
      "unit":{
        "state": "accepted",
        "total":152,
        "finished":142,
        "code":300,
        "covered":288,
      },
      "functional":{
        "state": "accepted",
        "total":6466,
        "finished":4321,
        "code":5000,
        "covered":1150
      },
    }
    }
  },
  {
    "type":"build",
    "changelist":"Tenrox-R1_1234",
    "owner":"",
    "timeStarted":"2014-04-16T22:00:00.000Z",
    "state": "completed",
    "results":"completed",
    "checklist":{
      "metrics": {
        "state": "accepted",
        "test":{
          "amount":64,
          "direction":"up" //all direction should be refactored and calculated based on the amount, if more than 50%
        },
        "maintainability":{
          "amount":53,
          "direction":"down"
        },
        "security":{
          "amount":53,
          "direction":"left"
        },
        "workmanship":{
          "amount":53,
          "direction":"right"
        }
      },
      "build":{
        "state": "accepted",
        "debug":true,
        "release":true,
        "date":"2014-04-16T22:00:00.000Z"
      },
      "tests":{
        "unit":{
          "state": "accepted",
          "total":152,
          "finished":142,
          "code":300,
          "covered":288,
        },
        "functional":{
          "state": "accepted",
          "total":6466,
          "finished":4321,
          "code":5000,
          "covered":1150
        },
      }
    }
  },
  {
    "type":"firewall",
    "changelist":"432460",
    "owner":"samy",
    "timeStarted":"2014-04-16T22:00:00.000Z",
    "state": "rejected",
    "results":"rejected",
    "checklist":{
      "metrics": {
        "state": "rejected",
        "test":{
          "amount":64,
          "direction":"up" //all direction should be refactored and calculated based on the amount, if more than 50%
        },
        "maintainability":{
          "amount":53,
          "direction":"down"
        },
        "security":{
          "amount":53,
          "direction":"left"
        },
        "workmanship":{
          "amount":53,
          "direction":"right"
        }
      },
      "build":{
        "state": "pending",
        "debug":true,
        "release":true,
        "date":"2014-04-16T22:00:00.000Z"
      },
      "tests":{
      "unit":{
        "state": "pending",
        "total":152,
        "finished":142,
        "code":300,
        "covered":288,
      },
      "functional":{
        "state": "pending",
        "total":6466,
        "finished":4321,
        "code":5000,
        "covered":1150
      },
    }
    }
  },
  {
    "type":"firewall",
    "changelist":"432459",
    "owner":"samy",
    "timeStarted":"2014-04-16T22:00:00.000Z",
    "state": "accepted",
    "results":"accepted",
    "checklist":{
      "metrics": {
        "state": "accepted",
        "test":{
          "amount":64,
          "direction":"up" //all direction should be refactored and calculated based on the amount, if more than 50%
        },
        "maintainability":{
          "amount":53,
          "direction":"down"
        },
        "security":{
          "amount":53,
          "direction":"left"
        },
        "workmanship":{
          "amount":53,
          "direction":"right"
        }
      },
      "build":{
        "state": "accepted",
        "debug":true,
        "release":true,
        "date":"2014-04-16T22:00:00.000Z"
      },
      "tests":{
        "unit":{
          "state": "accepted",
          "total":152,
          "finished":142,
          "code":300,
          "covered":288,
        },
        "functional":{
          "state": "accepted",
          "total":6466,
          "finished":4321,
          "code":5000,
          "covered":1150
        },
      }
    }
  }
];
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



