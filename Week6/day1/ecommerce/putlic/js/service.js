angular.module("store").service("mainSrvc", function($http){
this.getProducts = function(){
   return $http({
      method: 'GET',
      url: '/api/products'
   }).then(function(response) {
      return response.data;
   });
};
this.addProduct = function(productTitle, productColor){
   return $http({
      method: 'POST',
      url: '/api/products',
      data: {
         Title: productTitle,
         Color: productColor
      }
      });
   };
this.delProduct = function(productID){
   return $http({
      method: 'DELETE',
      url: '/api/products/' + productID
   });
};
this.updateProduct = function(productID){
   return $http({
      method: 'PUT',
      url: '/api/products/' + productID
   });
};
});
