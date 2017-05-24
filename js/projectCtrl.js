module.exports = angular.module("projectCtrl", function($scope,$modal,$state,$rootScope) {

	$scope.json = {};
	var modalInstance;
	$scope.json.isModel = false;
	// For static data, we can put in services or $http call for getting data from API
	$scope.listingData = [
		{
				"heading" : "Publishing",
				"description" : "It is a modulewhich help use to post in multiple channel at once.",
				"noOfMember" : "12"
		},
		{
				"heading" : "Paid",
				"description" : "It is a modulewhich help use to post in multiple channel at once.",
				"noOfMember" : "12"
		},
		{
				"heading" : "Core",
				"description" : "It is a modulewhich help use to post in multiple channel at once.",
				"noOfMember" : "12"
		},
		{
				"heading" : "Engagement",
				"description" : "It is a modulewhich help use to post in multiple channel at once.",
				"noOfMember" : "12"
		},
		{
				"heading" : "Distributed",
				"description" : "It is a modulewhich help use to post in multiple channel at once.",
				"noOfMember" : "12"
		},
		{
				"heading" : "Social Selling",
				"description" : "It is a modulewhich help use to post in multiple channel at once.",
				"noOfMember" : "12"
		},
		{
				"heading" : "RTM",
				"description" : "It is a modulewhich help use to post in multiple channel at once.",
				"noOfMember" : "12"
		}
	];

	$scope.teamMebers = [
		{
			'empName' : 'Abhinav Singi',
			'taskName' : '',
			'status' : 'Done',
			'comment' : ''
		},
		{
			'empName' : 'Surbhi Gupta',
			'taskName' : '',
			'status' : 'On Hold',
			'comment' : ''
		},
		{
			'empName' : 'Pratibha Joshi',
			'taskName' : '',
			'status' : 'Done',
			'comment' : ''
		}
	];

	$scope.createProjectModal = function () {
		$scope.json.isModel = true;
		$scope.memberList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
		$rootScope.memberList = 'him';
		modalInstance = $modal.open({
			templateUrl: 'partials/createProject.html',
			windowClass:'createProject-modal',
			scope: $scope,
			size: 'lg'
		});

	}

	$scope.createProject = function () {
		var newProjectDetail = {
			"heading" : $scope.json.title,
			"description" : $scope.json.description,
			"noOfMember" : $scope.json.member
		};
		$scope.listingData.push(newProjectDetail);
		modalInstance.dismiss();
		$scope.json.isModel = false;
	}
	

});
