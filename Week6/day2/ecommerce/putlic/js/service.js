angular.module("store").service("mainSrvc", function($http){
this.getProducts = function(){
   return $http({
      method: 'GET',
      url: '/api/products'
   }).then(function(response) {
      return response.data;
   });
};
this.getProduct = function(){
   return $http({
      method: 'GET',
      url: '/api/products/' + product._id
   }).then(function(response) {
      return response.data;
   });
};
this.addProduct = function(productTitle, productDescription, productPrice){
   return $http({
      method: 'POST',
      url: '/api/products',
      data: {
         Title: productTitle,
         Description: productDescription,
         Price: productPrice
      }
   });
};
this.delProduct = function(productID){
   return $http({
      method: 'DELETE',
      url: '/api/products/' + productID.id
   });
};
this.updateProduct = function(selected){
      return $http({
         method: 'PUT',
         url: '/api/products/' + selected._id,
         data: {
            Title: selected.Title,
            Description: selected.Description,
            Price: selected.Price
         }
      });
   };
});
