angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  
  .state('tabsController.search', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('tabsController.searchResult', {
    url: '/page12',
    views: {
      'tab1': {
        templateUrl: 'templates/searchResult.html',
        controller: 'searchResultCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.favorites'
      2) Using $state.go programatically:
        $state.go('tabsController.favorites');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page3
      /page1/tab2/page3
  */
  .state('tabsController.favorites', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/favorites.html',
        controller: 'favoritesCtrl'
      },
      'tab2': {
        templateUrl: 'templates/favorites.html',
        controller: 'favoritesCtrl'
      }
    }
  })

  .state('tabsController.compare', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/compare.html',
        controller: 'compareCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.todo'
      2) Using $state.go programatically:
        $state.go('tabsController.todo');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page5
      /page1/tab2/page5
      /page1/tab5/page5
  */
  .state('tabsController.todo', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/todo.html',
        controller: 'todoCtrl'
      },
      'tab2': {
        templateUrl: 'templates/todo.html',
        controller: 'todoCtrl'
      },
      'tab5': {
        templateUrl: 'templates/todo.html',
        controller: 'todoCtrl'
      }
    }
  })

  .state('tabsController.coaching', {
    url: '/page6',
    views: {
      'tab4': {
        templateUrl: 'templates/coaching.html',
        controller: 'coachingCtrl'
      }
    }
  })

  .state('start', {
    url: '/page10',
    templateUrl: 'templates/start.html',
    controller: 'startCtrl'
  })

  .state('tabsController.login', {
    url: '/page14',
    views: {
      'tab1': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.schoolInfo'
      2) Using $state.go programatically:
        $state.go('tabsController.schoolInfo');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page22
      /page1/tab2/page22
  */
  .state('tabsController.schoolInfo', {
    url: '/page22',
    views: {
      'tab1': {
        templateUrl: 'templates/schoolInfo.html',
        controller: 'schoolInfoCtrl'
      },
      'tab2': {
        templateUrl: 'templates/schoolInfo.html',
        controller: 'schoolInfoCtrl'
      }
    }
  })

  .state('tabsController.coachSearchResult', {
    url: '/page24',
    views: {
      'tab4': {
        templateUrl: 'templates/coachSearchResult.html',
        controller: 'coachSearchResultCtrl'
      }
    }
  })

  .state('tabsController.purchase', {
    url: '/page25',
    views: {
      'tab4': {
        templateUrl: 'templates/purchase.html',
        controller: 'purchaseCtrl'
      }
    }
  })

  .state('tabsController.advisingSection', {
    url: '/page7',
    views: {
      'tab4': {
        templateUrl: 'templates/advisingSection.html',
        controller: 'advisingSectionCtrl'
      }
    }
  })

  .state('tabsController.chat', {
    url: '/page8',
    views: {
      'tab4': {
        templateUrl: 'templates/chat.html',
        controller: 'chatCtrl'
      }
    }
  })

  .state('tabsController.signup', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page10')

  

});