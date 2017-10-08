(function (){
    var app = angular.module ('store', [])
var gems =[
    {
    name:'Dodecahedrom', 
    price: 1000, 
    description: 'Lorem ipsum', 
    pictures: 'image_01.jpg', 
    discounts: [10,15,25], 
    stock:10,
review: [
{stars: 5, 
    comments: 'Lorem ipsum', 
    author: 'jovana'},    
{stars: 5, comments: 'Lorem ipsum', author: 'nohemi@mail.com'},    
{stars: 5, comments: 'Lorem ipsum', author: 'nohemi@mail.com'}    

],
    },
    
    {name:'Dodecahedrom', 
    price: 1000, 
    description: 'Lorem ipsum', 
    pictures: 'image_01.jpg', 
    discounts: [10,15,25], 
    stock:10,
review:
[
{stars: 5, comments: 'Lorem ipsum', author: 'nohemi@mail.com'},    
{stars: 5, comments: 'Lorem ipsum', author: 'nohemi@mail.com'},    
{stars: 5, comments: 'Lorem ipsum', author: 'nohemi@mail.com'}    

],
    },
    {name:'Dodecahedrom', 
    price: 1000, 
    description: 'Lorem ipsum', 
    pictures: 'image_01.jpg', 
    discounts: [10,15,25], 
    stock:10,
review:
[
{stars: 5, comments: 'Lorem ipsum', author: 'nohemi@mail.com'},    
{stars: 5, comments: 'Lorem ipsum', author: 'nohemi@mail.com'},    
{stars: 5, comments: 'Lorem ipsum', author: 'nohemi@mail.com'}    

]
    }
]
    app.controller('StoreController',['$http',function($http){
        var store = this;
        var url = 'http://localhost:3001/api/macp/';
        store.p = {
            name: '',
            price: 0,
            description: '',
            images: '',
            stock: 0,
            discounts: 0,
            reviews: {
                stars: 0,
                comments: '',
                author: '',
            }
        };
        store.view = true;
        


        $http.get(url)
        .then(function success(response){
            console.log(response);
            console.log(response.data.macp);
            store.products = response.data.macp;
        });

        store.addProduct = function(product){
            console.log(product);
            $http.post(url, product)
            .then(function success(response){
                console.log(response);
            }, 
            function err(err){
                console.log(err);
            })
        }

        store.deleteProduct = function(id){
            console.log(id);
            $http.delete(url + id)
            .then(function success(response){
                console.log(`El producto con el id ${id} se ha eliminado`);
                document.location.reload();
            }, 
            function err(err){
                console.log(`El producto no se ha eliminado correctamente ERR: ${err}`);
            })
        }

        store.getUniqueProduct = function(id){
             $http.get(url + id)
        .then(function success(response){
            console.log(response);
            store.product = response.data.macp;
        });

        }

    }]);

})();