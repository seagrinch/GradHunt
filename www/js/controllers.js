angular.module('app.controllers', [])
  
.controller('searchCtrl',function($scope,ProgramService,DataStore) {
  $scope.programs = [];
  ProgramService.getPrograms().then(function(res) {
 	  $scope.programs = res;
    console.log($scope.programs);
  });
  
  $scope.regions = [
    { id: 0, title: "Any" }, 
    { id: 1, title: "New England CT ME MA NH RI VT" }, 
    { id: 2, title: "Mid East DE DC MD NJ NY PA" }, 
    { id: 3, title: "Great Lakes IL IN MI OH WI" }, 
    { id: 4, title: "Plains IA KS MN MO NE ND SD" }, 
    { id: 5, title: "Southeast AL AR FL GA KY LA MS NC SC TN VA WV" }, 
    { id: 6, title: "Southwest AZ NM OK TX" }, 
    { id: 7, title: "Rocky Mountains CO ID MT UT WY" }, 
    { id: 8, title: "Far West AK CA HI NV OR WA" }, 
    { id: 9, title: "Outlying areas AS FM GU MH MP PR PW VI" }];

  $scope.region = DataStore.region;
  $scope.degree = DataStore.degree;
  $scope.program = DataStore.program;
  $scope.score = DataStore.score;

  $scope.updateRegion = function(v) {
    DataStore.setRegion(v);
    //console.log(DataStore);
  }  
  $scope.updateDegree = function(v) {
    DataStore.setDegree(v);
    //console.log(DataStore);
  }
  $scope.updateProgram = function(v) {
    DataStore.setProgram(v);
    //console.log(DataStore);
  }
  $scope.updateScore = function(v) {
    DataStore.setScore(v);
    //console.log(DataStore);
  }
  
})
   
.controller('searchResultCtrl', function($scope, $state, SchoolService, DataStore) {
	$scope.schools = [];
  SchoolService.getSchools(DataStore.program,DataStore.degree,DataStore.region,DataStore.score).then(function(res) {
    $scope.schools = res;
    //console.log($scope.schools );
  });

  $scope.school = DataStore.school;
  $scope.changeSchool = function(schoolId) {
    DataStore.setSchool(schoolId);	
    console.log(schoolId)
  	$state.go('tabsController.schoolInfo');
  }

})

.controller('favoritesCtrl',function($scope, $state, FavoriteService, DataStore) {
  $scope.favorites = [];
  FavoriteService.getFavorite().then(function(res) {
    $scope.favorites = res.data.results;   
    //console.log($scope.favorites);
  });

  $scope.deleteFavorite = function(school){
    Parse.initialize("gradhunt_2016_mobileapp");
    Parse.serverURL = 'http://gradhunt.herokuapp.com/parse' 
    var Favorite = Parse.Object.extend("Favorites");
    var query = new Parse.Query(Favorite);
    query.get(school.objectId, {
      success: function(myObject) {
        myObject.destroy({
          success: function(myObject) {
            console.log('Deleted')
            //$state.go('tabsController.favorites', {}, {reload: true});
            $state.reload();
          },
          error: function(myObject, error) {
            alert('Delete failed, with error code: ' + error.message);
          }
        });
      },
      error: function(object, error) {
        alert('The object was not retrieved successfully');
      }
    });
  }

  $scope.changeSchool = function(schoolId) {
    DataStore.setSchool(schoolId);	
    console.log(schoolId)
  	$state.go('tabsController.schoolInfo');
  }
  
})


.controller('compareCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('todoCtrl', function($scope) {
  $scope.appTitle = "My ToDos";
  $scope.appHeadline = "Save your tasks here!";
  $scope.saved = localStorage.getItem('todos');
  $scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [ {text: 'Fill out the application form', done: false}, {text: 'Collect Transcripts', done: false} ];
  localStorage.setItem('todos', JSON.stringify($scope.todos));

  $scope.addTodo = function() {
    $scope.todos.push({
      text: $scope.todoText,
      done: false
    });
    $scope.todoText = ''; //clear the input after adding
    localStorage.setItem('todos', JSON.stringify($scope.todos));
  };

  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo){
      count+= todo.done ? 0 : 1;
    });
    return count;
  };

  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo){
      if (!todo.done)
        $scope.todos.push(todo);
    });
    localStorage.setItem('todos', JSON.stringify($scope.todos));
  };
}
)

   
.controller('coachingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('startCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('schoolInfoCtrl', function($scope,$http, $window, SchoolService, DataStore, FavoriteService) {
  $scope.school = [];
  SchoolService.getSchool(DataStore.school).then(function(res) {
      $scope.school = res;
      console.log($scope.school);
  });

  $scope.redirectToUrl = function(url){
    console.log(url);
    if(url) {
      $window.open("http://"+url, '_blank');
    }
  };

  $scope.addFavorite = function(school){
    Parse.initialize("gradhunt_2016_mobileapp");
    Parse.serverURL = 'http://gradhunt.herokuapp.com/parse' 
    console.log('Saving school ' + school.INSTNM);
    console.log(school);
    // var dataToSubmit = {_ContentType: Name, _type : "Object"};
  /*
    $http.post("http://gradhunt.herokuapp.com/parse/classes/Favorites", 
      {"SchoolName":school.INSTNM,"City":school.CITY,"State":school.STABBR},                
      {headers: 
        {'X-Parse-Application-Id': "gradhunt_2016_mobileapp"}
      }
    );
    console.log('Data posted in parse');
  */
    var Favorite = Parse.Object.extend("Favorites");
    var favorite = new Favorite();
    favorite.set("SchoolName", school.INSTNM);
    favorite.set("City", school.CITY);
    favorite.set("State", school.STABBR);    
    favorite.set("sid", school.id);    
    favorite.save(null, {
      success: function(res) {
        console.log('New object created with objectId: ' + res.id);
      },
      error: function(res, error) {
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });

  }

})

   
.controller('coachSearchResultCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('purchaseCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('advisingSectionCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('chatCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 