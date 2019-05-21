app.directive('navbar',function(){
    return {
        templateUrl : 'application/components/navbar.html',
        scope : {
            navbarvar : '='
        }
    }
});
app.directive('welcome',function(){
    return {
        templateUrl : 'application/components/welcome.html',
        scope : {
            welcomevar : '='
        }
    }
});
app.directive('signup',function(){
    return {
        templateUrl : 'application/components/signup.html',
        scope : {
            signupvar : '='
        }
    }
});
app.directive('nearby',function(){
    return {
        templateUrl : 'application/components/nearby.html',
        scope : {
            nearbyvar : '='
        }
    }
});
app.directive('random',function(){
    return {
        templateUrl : 'application/components/random.html',
        scope : {
            randomvar : '='
        }
    }
})