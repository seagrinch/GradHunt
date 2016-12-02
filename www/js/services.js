angular.module('app.services', [])

.factory('SchoolService', ['$http','$q',function($http,$q){
  return {
    getSchools:function(program, degree, region, score) {
      var deferred = $q.defer();
      
      url = "http://gradhunt.visualduck.com/schools/recommend/"+program+".json?degree="+degree+"&score="+score;
      if(region) {
        url += "&region="+region
      }
      console.log(url);
      
      $http.get(url).then(function(res) {
        console.log(res);
        var results = res.data.map(function(result) {
          return result;
        });
        deferred.resolve(results);
      },
      function(response){
        console.log("error in gradhunt services");
        console.log(response);
      });
			return deferred.promise;
		},	
    getSchool:function(id) {
      var deferred = $q.defer();
      
      url = "http://gradhunt.visualduck.com/schools/view/"+id+".json?";
      console.log(url);
      
      $http.get(url).then(function(res) {
        console.log(res);
        var results = res.data;
        deferred.resolve(results);
      },
      function(response){
        console.log("error in gradhunt services");
        console.log(response);
      });
			return deferred.promise;
		},	
  };
}])

.factory('ProgramService', ['$http','$q',function($http,$q){
  return {
    getPrograms:function() {
      var deferred = $q.defer();
      $http.get("majors.json").then(function(res) {
        console.log(res);
        var results = res.data.map(function(result) {
          return result;
        });
				deferred.resolve(results);
			},
      function(response){
        console.log("error in gradhunt services");
        console.log(response);
      });
      return deferred.promise;
    }
  };
}])


.factory('DataStore', function() {
    //create datastore with default values
    var DataStore = {region:0, degree:'phd', program:1234, score:800, school:0};

    DataStore.setRegion = function(value) {
       DataStore.region = value;
    };
    DataStore.setDegree = function(value) {
       DataStore.degree = value;
    };
    DataStore.setProgram = function(value) {
       DataStore.program = value;
    };
    DataStore.setScore = function(value) {
       DataStore.score = value;
    };
    DataStore.setSchool = function(value) {
       DataStore.school = value;
    };
   
    return DataStore;
})

.service('BlankService', [function(){
}]);

