app.controller('interestCtrl',function($scope){
    $scope.interest_arr = ["tattoo.png","art.png","model.png","body_artist.png","performance.png","venue_pic.png","supplier_pic.png","business_pic.png"];
    $scope.finished = false;
    $scope.finish = function(){
        $scope.finished = true;
    }
})