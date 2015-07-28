'use strict';

app.service('teamService', function($http, $q) {

	this.addNewGame = function(gameObj) {

		var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;

		if (parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)) {
			gameObj.won = true;
		} else {
			gameObj.won = false;
		}

		$http.post(url, gameObj)
		.success(function(data, status, headers, config) {
			//console.log(data);
  		})
  		.error(function(data, status, headers, config) {
  			console.log('Error: ' + JSON.stringify({data: data}));
  		});

	};

	this.getTeamData = function(team) {

		var url = 'https://api.parse.com/1/classes/' + team;
		var deferred = $q.defer();

		$http.get(url)
		.success(function(data, status, headers, config) {
			//console.log(data);
			var results = data.results,
				wins = 0,
				losses = 0;

			for (var i = 0; i < results.length; i++) {
				if (results[i].won) {
					wins++;
				} else {
					losses++;
				}
			}

			results.wins = wins;
			results.losses = losses;
			deferred.resolve(results);

  		})
  		.error(function(data, status, headers, config) {
  			console.log('Error: ' + JSON.stringify({data: data}));
  		});

  		return deferred.promise;

	};

});