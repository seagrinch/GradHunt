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
    console.log(DataStore);
  }  
  $scope.updateDegree = function(v) {
    DataStore.setDegree(v);
    console.log(DataStore);
  }
  $scope.updateProgram = function(v) {
    DataStore.setProgram(v);
    console.log(DataStore);
  }
  $scope.updateScore = function(v) {
    DataStore.setScore(v);
    console.log(DataStore);
  }
  
})
   
.controller('searchResultCtrl', function($scope,SchoolService,DataStore) {
	$scope.schools = [];
    SchoolService.getSchools(DataStore.program,DataStore.degree,DataStore.region,DataStore.score).then(function(res) {
      $scope.schools = res;
      console.log($scope.schools );
  });
})
   
.controller('favoritesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('compareCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('todoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
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
   
.controller('schoolInfoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
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
 