app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl : 'application/view/landing.html'
    })
    .when('/signup',{
        templateUrl : 'application/view/signup.html'
    })
    .otherwise({
        redirectTo : '/'
    })

})