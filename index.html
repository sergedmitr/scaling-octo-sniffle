(function(angular) {
	'use strict';
	angular.module('deferredExample', [])
		.controller('Ctrl', ['$q', '$log', function($q, $log) {
			var deferred = $q.defer(),
				promise = deferred.promise;
			
			// define handlers on the promise to gain visibility
			// into their execution
			promise.then(function resolved() {
				$log.log('success');
			}, function rejected() {
				$log.log('rejected');
			});

			// verify initial state
			$log.log(promise.$$state.status); // 0

			// reesolve the promise
			deferred.resolve();
			// >> resolved

			$log.log(promise.$$state.status); // 1
			// output and state check verify state transition

			// attempt to reject the already resolved promise
			//deferred.reject();

			$log.log(promise.$$state.status); // 2
			// output and state check verify no state transition
		}]);
}) (window.angular);
