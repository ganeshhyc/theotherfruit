app.controller('nearbyCtrl',function($scope){
    $scope.city = city;
    $scope.gender = {
        "male":"male.png",
        "female":"female.png",
        "other":"others.png"
    };
    $scope.toggle_gender = function(sex){
        switch(sex){
            case 'male' : {
                if($scope.gender.male == 'male.png') {
                    $scope.gender.male = 'male_selected.png';
                    $scope.gender.female = 'female.png';
                    $scope.gender.other = 'others.png';
                } else  {
                    $scope.gender.male = 'male.png';
                }
            }
            break;
            case 'female' : {
                if($scope.gender.female == 'female.png') {
                    $scope.gender.female = 'female_selected.png'; 
                    $scope.gender.male = 'male.png';
                    $scope.gender.other = 'others.png';
                } else  {
                    $scope.gender.female = 'female.png';
                }
            }
            break;
            case 'others' : {
                {
                    if($scope.gender.other == 'others.png') {
                        $scope.gender.female = 'female.png'; 
                        $scope.gender.male = 'male.png';
                        $scope.gender.other = 'others_selected.png';
                    } else  {
                        $scope.gender.other = 'others.png';
                    }
                }
            }
            break;
            default:
                console.log('invalid!');

        }
    }
})