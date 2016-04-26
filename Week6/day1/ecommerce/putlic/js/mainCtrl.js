angular.module("store").controller("mainCtrl", function($scope, mainSrvc){
   $scope.test = "working";
   $scope.getProducts = function(){
      mainSrvc.getProducts().then(function(response){
         $scope.products = response;
      });
   };
   $scope.getProducts();
   $scope.addProduct = function(productTitle, productColor){
      mainSrvc.addProduct(productTitle, productColor);
   };
   $scope.delProduct = function(productID){
      mainSrvc.delProduct(productID);
   };
});
