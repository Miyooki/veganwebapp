/**
 * Created by johnp on 2018-02-17.
 */


//use angularjs: so that when we see enter , we can make the request to bing api image search, and then
// populate all the elements
var app = angular.module('my_app', []);
app.controller('search-ctrl',

['$scope', '$http', function($scope, $http)
{
    $scope.any_func = function (){
    console.log("some more content SCOPE");
    $scope.ping_bing();
};
    $scope.ping_bing = function()
    {
        search_term = document.getElementById('search-box').value;
        subscription_key = "00be766d06054f6a8ee8830c9fce513c";
        $http.get('https://api.cognitive.microsoft.com/bing/v7.0/images/search', {
            headers: {
                "Ocp-Apim-Subscription-Key" : subscription_key
            }, //try doing it the "proper" way with the general http$() method
            params: {
                "q": search_term, "license": "public", "imageType": "photo"

            }
        }).
        then(function(response) {
            $scope.greeting = response.data;
            console.log("make dat req");
            console.log(response);
            console.log(response.data.value[0].contentUrl);

            //for each one, change the picture
            document.getElementById("card1").src=response.data.value[0].contentUrl;

        });


    }

}]);

app.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    // console.log('keypressed');
                    scope.$eval(attrs.myEnter);

                });

                event.preventDefault();
            }
        });
    };
});

//must be in scope
// function any_func(){
//     console.log("some more content");
// }