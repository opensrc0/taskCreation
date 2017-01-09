app.controller("taskCtrl", function($scope,$modal,$state,$window,$stateParams) {

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
