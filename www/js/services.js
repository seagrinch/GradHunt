angular.module('app.services', [])

.factory('SchoolService', ['$http','$q',function($http,$q){

	return {
		getSchools:function() {
			var deferred = $q.defer();
			
			$http.get("http://gradhunt.visualduck.com/schools.json")
                .then(function(res) {
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
            /*$http({
                    url: "http://gradhunt.visualduck.com/schools.json",
                    method: "GET",
                }).success(function(response){
                   console.log("success")
                    console.log(response)
                    
                }).error(function(error){
                 console.log("error")
                });*/
           /* $http.get("http://swapi.co/api/films").then(
                    function(response) {
                        console.log('get',response);
                        
                    },
                    function(data) {
                        // Handle error here
                         console.log("error");
                        console.log(data);
                    });*/
            /*
            $http.get('http://gradhunt.herokuapp.com/parse/classes/Coaches',{
                    headers:{
                        'X-Parse-Application-Id': "gradhunt_2016_mobileapp",
                    }
                 }).then(function(successResponse){
                       console.log(successResponse.data.results[0].FirstName);
                    }, function(errorResponse){
                      
                 }).finally(function(){
                     
                 });
            */
			return deferred.promise;
		},
		getFilm:function(url) {
			var deferred = $q.defer();
			
			$http.get(url).then(function(res) {
				//console.dir(res.data);
				deferred.resolve(res.data);
			});

			return deferred.promise;
			
		}	
	};
}])
.factory('ProgramService', ['$http','$q',function($http,$q){
    return {
		getPrograms:function() {
			var deferred = $q.defer();
		
			$http.get("http://gradhunt.visualduck.com/programs.json").then(function(res) {
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
.service('BlankService', [function(){

}]);

