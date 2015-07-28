'use strict';

app.service('homeService', function($q, teamService){
 
  this.getAllData = function(){
    var deferred = $q.defer();
    var teamData = {};
    var promise1 = teamService.getTeamData('utahjazz');
    var promise2 = teamService.getTeamData('losangeleslakers');
    var promise3 = teamService.getTeamData('miamiheat');
    $q.all([promise1, promise2, promise3]).then(function(data) {
    	teamData['utahjazz'] = data[0];
    	teamData['losangeleslakers'] = data[1];
		teamData['miamiheat'] = data[2];
		deferred.resolve(teamData);
    });
    return deferred.promise;
  };

});