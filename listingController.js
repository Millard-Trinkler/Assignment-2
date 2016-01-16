angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      var newListing = {
        code: $scope.code,
        name: $scope.name,
        address: $scope.address,
        coordinates: {
          latitude: $scope.latitude,
          longitude: $scope.longitude,
        }
      }
      $scope.listings.push(newListing);
    };
    $scope.deleteListing = function(obj) {
      var index = $scope.listings.indexOf(obj);
      $scope.listings.splice(index,1);
    };
    $scope.showDetails = function(obj) {
      $scope.detailedInfo = obj;
    };
  }
]);