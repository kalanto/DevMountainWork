angular.module("store").controller("mainCtrl", function($scope, mainSrvc){
   $scope.test = "working";
   $scope.getProducts = function(){
      mainSrvc.getProducts().then(function(response){
         $scope.products = response;
      });
   };
   $scope.getProducts();
   $scope.addProduct = function(productTitle, productDescription, productPrice){
      mainSrvc.addProduct(productTitle, productDescription, productPrice);
   };
   $scope.delProduct = function(productID){
      mainSrvc.delProduct(productID);
   };
   $scope.cart = [];
   $scope.addCart = function(productTitle, productDescription, productPrice){
      $scope.cart.push(productTitle, productDescription, productPrice);
   };
   $scope.updateProduct = function(selected){
      mainSrvc.updateProduct(selected);
   };
   $scope.selected = {};
   $scope.select = function(product){
      $scope.selected = product;
   };
});
