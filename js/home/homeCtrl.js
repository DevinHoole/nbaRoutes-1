'use strict';

app.controller('homeCtrl', function($scope, homeService, allData){
	
	$scope.utahData = allData['utahjazz'];
	$scope.losangelesData = allData['losangeleslakers'];
	$scope.miamiData = allData['miamiheat'];
	
});