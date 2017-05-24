(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./projectCtrl.js');
require('./taskCtrl.js');

const app = angular.module("crmApp", ['ui.bootstrap','ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/project');

    $stateProvider
        .state('project', {
            url: '/project',
            templateUrl: 'partials/project.html',
            controller: 'projectCtrl'
        })
        .state('task', {
            url: '/:foo?bar',
            templateUrl: 'partials/task.html',
            controller: 'taskCtrl'    
        });
});



},{"./projectCtrl.js":2,"./taskCtrl.js":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
module.exports = angular.module("taskCtrl", function($scope,$modal,$state,$window,$stateParams) {

	$scope.json = {};
	var modalInstance;
	var index;
		
	$scope.json.isChangeTask = false;

	// For static data, we can put in services or $http call for getting data from API
	$scope.listingData = 
		{
			"Publishing" : {
				"heading" : "Publishing",
				"description" : "It is a modulewhich help use to post in multiple channel at once.",
				"noOfMember" : "12",
				"teamMember" : [
					{
						'empName' : 'Abhinav Singi',
						'task' : [{
							'taskName' : 'Publishing View',
							'status' : 'Done',
							'comment' : 'Include all channel preview'
						}]
					},
					{
						'empName' : 'Surbhi Gupta',
						'task' : [{
							'taskName' : 'Icon Creation',
							'status' : 'On Hold',
							'comment' : 'Needed a new icon set'
						},
						{
							'taskName' : 'Publishing View',
							'status' : 'Done',
							'comment' : 'Include all channel preview'
						}]
					},
					{
						'empName' : 'Pratibha Joshi',
						'task' : [{
							'taskName' : 'Publishing View',
							'status' : 'Done',
							'comment' : 'Include all channel preview'
						}]
					}
				]
			},
			"Paid" : {
				"heading" : "Paid",
				"description" : "It is a modulewhich help use to post in multiple channel at once.",
				"noOfMember" : "12",
				"teamMember" : [
					{
						'empName' : 'Abhinav Singi',
						'task' : [{
							'taskName' : 'Publishing View',
							'status' : 'Done',
							'comment' : 'Include all channel preview'
						}]
					},
					{
						'empName' : 'Surbhi Gupta',
						'task' : [{
							'taskName' : 'Icon Creation',
							'status' : 'On Hold',
							'comment' : 'Needed a new icon set'
						},
						{
							'taskName' : 'Publishing View',
							'status' : 'Done',
							'comment' : 'Include all channel preview'
						}]
					},
					{
						'empName' : 'Pratibha Joshi',
						'task' : [{
							'taskName' : 'Publishing View',
							'status' : 'Done',
							'comment' : 'Include all channel preview'
						}]
					}
				]
			},
			"Core" : {
				"heading" : "Core",
				"description" : "It is a modulewhich help use to post in multiple channel at once.",
				"noOfMember" : "12",
				"teamMember" : [
					{
						'empName' : 'Abhinav Singi',
						'task' : [{
							'taskName' : 'Publishing View',
							'status' : 'Done',
							'comment' : 'Include all channel preview'
						}]
					},
					{
						'empName' : 'Surbhi Gupta',
						'task' : [{
							'taskName' : 'Icon Creation',
							'status' : 'On Hold',
							'comment' : 'Needed a new icon set'
						},
						{
							'taskName' : 'Publishing View',
							'status' : 'Done',
							'comment' : 'Include all channel preview'
						}]
					},
					{
						'empName' : 'Pratibha Joshi',
						'task' : [{
							'taskName' : 'Publishing View',
							'status' : 'Done',
							'comment' : 'Include all channel preview'
						}]
					}
				]
			},
			"Engagement" : {
				"heading" : "Engagement",
				"description" : "It is a modulewhich help use to post in multiple channel at once.",
				"noOfMember" : "12",
				"teamMember" : [
					{
						'empName' : 'Abhinav Singi',
						'task' : [{
							'taskName' : 'Publishing View',
							'status' : 'Done',
							'comment' : 'Include all channel preview'
						}]
					},
					{
						'empName' : 'Surbhi Gupta',
						'task' : [{
							'taskName' : 'Icon Creation',
							'status' : 'On Hold',
							'comment' : 'Needed a new icon set'
						},
						{
							'taskName' : 'Publishing View',
							'status' : 'Done',
							'comment' : 'Include all channel preview'
						}]
					},
					{
						'empName' : 'Pratibha Joshi',
						'task' : [{
							'taskName' : 'Publishing View',
							'status' : 'Done',
							'comment' : 'Include all channel preview'
						}]
					}
				]
			},
			"Distributed" : {
				"heading" : "Distributed",
				"description" : "It is a modulewhich help use to post in multiple channel at once.",
				"noOfMember" : "12",
				"teamMember" : [
					{
						'empName' : 'Abhinav Singi',
						'task' : [{
							'taskName' : 'Publishing View',
							'status' : 'Done',
							'comment' : 'Include all channel preview'
						}]
					},
					{
						'empName' : 'Surbhi Gupta',
						'task' : [{
							'taskName' : 'Icon Creation',
							'status' : 'On Hold',
							'comment' : 'Needed a new icon set'
						},
						{
							'taskName' : 'Publishing View',
							'status' : 'Done',
							'comment' : 'Include all channel preview'
						}]
					},
					{
						'empName' : 'Pratibha Joshi',
						'task' : [{
							'taskName' : 'Publishing View',
							'status' : 'Done',
							'comment' : 'Include all channel preview'
						}]
					}
				]
			},
			"Social Selling" : {
				"heading" : "Social Selling",
				"description" : "It is a modulewhich help use to post in multiple channel at once.",
				"noOfMember" : "12",
				"teamMember" : [
					{
						'empName' : 'Abhinav Singi',
						'task' : [{
							'taskName' : 'Publishing View',
							'status' : 'Done',
							'comment' : 'Include all channel preview'
						}]
					},
					{
						'empName' : 'Surbhi Gupta',
						'task' : [{
							'taskName' : 'Icon Creation',
							'status' : 'On Hold',
							'comment' : 'Needed a new icon set'
						},
						{
							'taskName' : 'Publishing View',
							'status' : 'Done',
							'comment' : 'Include all channel preview'
						}]
					},
					{
						'empName' : 'Pratibha Joshi',
						'task' : [{
							'taskName' : 'Publishing View',
							'status' : 'Done',
							'comment' : 'Include all channel preview'
						}]
					}
				]
			},
			"RTM" : {
				"heading" : "RTM",
				"description" : "It is a modulewhich help use to post in multiple channel at once.",
				"noOfMember" : "12",
				"teamMember" : [
					{
						'empName' : 'Abhinav Singi',
						'task' : [{
							'taskName' : 'Publishing View',
							'status' : 'Done',
							'comment' : 'Include all channel preview'
						}]
					},
					{
						'empName' : 'Surbhi Gupta',
						'task' : [{
							'taskName' : 'Icon Creation',
							'status' : 'On Hold',
							'comment' : 'Needed a new icon set'
						},
						{
							'taskName' : 'Publishing View',
							'status' : 'Done',
							'comment' : 'Include all channel preview'
						}]
					},
					{
						'empName' : 'Pratibha Joshi',
						'task' : [{
							'taskName' : 'Publishing View',
							'status' : 'Done',
							'comment' : 'Include all channel preview'
						}]
					}
				]
			}
		};

	$scope.teamMebers = $scope.listingData[$state.params.bar].teamMember;

	$scope.createTaskModal = function (i) {
		$scope.json.task = '';
		$scope.json.description = '';
		$scope.json.status = '';
		index = i;
		$scope.memberList = ["On Hold", "Done", "In Process", "Sent", "Schedule"];
		modalInstance = $modal.open({
			templateUrl: 'partials/createTask.html',
			windowClass:'createProject-modal',
			scope: $scope,
			size: 'lg'
		});
	}

	$scope.createTask = function () {
		var newProjectDetail = {
			"taskName" : $scope.json.task,
			"comment" : $scope.json.description,
			"status" : $scope.json.status
		};

		$scope.teamMebers[index].task.push(newProjectDetail);
		modalInstance.dismiss();
		$scope.json.isModel = false;
	}

	$scope.allowDrop= function (ev) {
        ev.preventDefault();
    };

	$scope.drag = function (ev) {
		ev.dataTransfer.setData("text", ev.target.id);
	}

	  $scope.drop=  function (ev,taskrowAttr) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        var targetAttr = findUpTag(ev.target,'data-idname');
    	// ev.dataTransfer.setData("text1", node);
    	// var data1 = ev.dataTransfer.getData("text1");
    	// document.getElementById(targetAttr).lastChild.innerHTML = '';
    	if(taskrowAttr != targetAttr) {
	        document.getElementById(targetAttr).appendChild(document.getElementById(data));
	    	document.getElementById(data).setAttribute('data-idname', targetAttr);
    	}
    };

    function findUpTag(el, attr) {
	    while (el.parentNode) {
	        el = el.parentNode;
	        if (el.getAttribute('data-idname')) {
	            return el.getAttribute('data-idname');
	        }
	    }
	    return null;
	}

	$scope.alerting = function () {
		alert('You do not have permission to change status');
	}

});

},{}]},{},[1]);
