var app = angular.module('app', []);

app.controller('PageController', function($scope){
    $scope.layout = 'grid';

    $scope.itemClicked = function ($index) {
        $scope.layout = $index;
        return $scope.layout;
    };

    $scope.mysort = function ($index) {
        $scope.sortmethod = $index;
        return $scope.sortmethod;
    }
});

app.controller('CartController', function ($scope, $rootScope) {
    $rootScope.quantity = 0;
    $rootScope.promoFlag = false;

    $rootScope.addItem = function () {
        console.log('+');
        $rootScope.quantity++;
        console.log($rootScope.quantity + ' in cart');
    };

    $rootScope.removeItem = function () {
        if($rootScope.quantity >= 1){
            console.log('-');
            $rootScope.quantity--;
        }
    };
});

app.controller('PromoController', function ($scope, $rootScope) {
    $scope.promo = '';

    $scope.applyPromo = function () {
        if($scope.promo == '1234'){
            $rootScope.promoFlag = true;
            console.log($rootScope.promoFlag);
            console.log($rootScope.quantity + ' in promo');
        } else {
            $rootScope.promoFlag = false;
        }
    };
});

app.controller('ProductsController', function(){
    this.products = [
        {
            name: "TP-LINK TL-WR841N",
            img: "img/tp_link_tl_wr841n_images_5837240.jpg",
            price: "529",
            presence: true
        },
        {
            name: "Xiaomi WiFi MiRouter 3 White International Version",
            img: "img/copy_xiaomi_wifi_mirouter_3_587e3a15bac14_images_1837337938.jpg",
            price: "799",
            presence: true
        },
        {
            name: "TP-LINK TL-WR840N",
            img: "img/tp-link_tl-wr840n_images_1551541342.jpg",
            price: "463",
            presence: false
        },{
            name: "Xiaomi Mini Wifi White",
            img: "img/xiaomi_6954176868169_images_2313549793.jpg",
            price: "749",
            presence: true
        },
        {
            name: "TP-LINK TL-WR940N",
            img: "img/tp_link_tl_wr940n_images_1438460003.jpg",
            price: "686",
            presence: true
        }
    ]
});



