app.controller('profileCtrl',function($scope){
    $scope.profile = {
        "artist":"artist.png",
        "member":"member.png",
        "provider":"provider.png"
    };
    $scope.profile_select = {
        "business":"business.png",
        "venue":"venue.png",
        "supplier":"supplier.png"
    };
    $scope.select_profile = function(profile){
        switch(profile){
            case 'business' : {
                if($scope.profile_select.business == 'business.png') {
                    $scope.profile_select.business = 'business_selected.png';
                } else  {
                    $scope.profile_select.business = 'business.png';
                }
            }
            break;
            case 'venue' : {
                if($scope.profile_select.venue == 'venue.png') {
                    $scope.profile_select.venue = 'venue_selected.png'; 
                } else  {
                    $scope.profile_select.venue = 'venue.png';
                }
            }
            break;
            case 'supplier' : {
                {
                    if($scope.profile_select.supplier == 'supplier.png') {
                        $scope.profile_select.supplier = 'supplier_selected.png';
                    } else  {
                        $scope.profile_select.supplier = 'supplier.png';
                    }
                }
            }
            break;
            default:
                console.log('invalid!');

        }
    }
    $scope.setProfile = 'default';
    $scope.profile_selected = 'default';
    $scope.toggle_profile = function(profile){
        switch(profile){
            case 'artist' : {
                if($scope.profile.artist == 'artist.png') {
                    $scope.profile.artist = 'artist_selected.png';
                    $scope.profile.member = 'member.png';
                    $scope.profile.provider = 'provider.png';
                    $scope.profile_selected = 'artist';
                } else  {
                    $scope.profile.artist = 'artist.png';
                        $scope.profile_selected = 'default';
                    }
            }
            break;
            case 'member' : {
                if($scope.profile.member == 'member.png') {
                    $scope.profile.member = 'member_selected.png'; 
                    $scope.profile.artist = 'artist.png';
                    $scope.profile.provider = 'provider.png';
                    $scope.profile_selected = 'member';
                } else  {
                    $scope.profile.member = 'member.png';
                    $scope.profile_selected = 'default';
                }
            }
            break;
            case 'provider' : {
                {
                    if($scope.profile.provider == 'provider.png') {
                        $scope.profile.member = 'member.png'; 
                        $scope.profile.artist = 'artist.png';
                        $scope.profile.provider = 'provider_selected.png';
                        $scope.profile_selected = 'provider';
                    } else  {
                        $scope.profile.provider = 'provider.png';
                        $scope.profile_selected = 'default';
                    }
                }
            }
            break;
            default:
                console.log('invalid!');

        }
    }
    $scope.my_profile = function(profile_name){
        $scope.setProfile = profile_name;
    }
})