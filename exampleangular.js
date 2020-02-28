<!DOCTYPE html>
<!-- Declaring the ng-app -->
<html ng-app="parking">
	<head>
		<title>Parking</title>
		<script src="lib/angular.js"></script>
		<script>
			// Creating the module called parking
			var parking = angular.module("parking", []);
			// Registering the parkingCtrl to the parking module
			parking.controller("parkingCtrl", function ($scope) {
				// Binding the car's array to the scope
				$scope.cars = [
					{ plate: "6MBV006" },
					{ plate: "5BBM299" },
					{ plate: "5AOJ230" }
				];
				// Binding the park function to the scope
				$scope.park = function (car) {
					$scope.cars.push(angular.copy(car));
					delete $scope.car;
				};
			});
		</script>
	</head>
	<!-- Attaching the view to the parkingCtrl -->
	<body ng-controller="parkingCtrl">
		<h3>[Packt] Parking</h3>
		<table>
			<thead>
				<tr>
					<th>Plate</th>
				</tr>
			</thead>
			<tbody>
				<!-- Iterating over the cars -->
				<tr ng-repeat="car in cars">
					<!-- Showing the car's plate -->
					<td>{{car.plate}}</td>
				</tr>
			</tbody>
		</table>
		<!-- Binding the car object, with plate, to the scope -->
		<input type="text" ng-model="car.plate"/>
		<!-- Binding the park function to the click event -->
		<button ng-click="park(car)">Park</button>
	</body>
</html>
