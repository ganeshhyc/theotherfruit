app.controller('nearbyCtrl',function($scope){
    $scope.city = city;
    $scope.search_arr = [];
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
    $scope.city_autocomplete = function(sub_string){
        if(sub_string !== undefined){
            $scope.search_arr = $scope.city.filter(function(city_name){
                let sub = sub_string.substring(0, sub_string.length-1);
                let res = city_name.toLowerCase().includes(sub);
                return res;
            })
        }
        else if(sub_string == undefined || sub_string == ''){
            $scope.search_arr = [];
        }
    }
})