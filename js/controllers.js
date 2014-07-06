'use strict';

//controllers
var app = angular.module('myApp.controllers', []); 
    
app.controller('taskController', function($scope) {
    $scope.today = new Date();
    $scope.saved = localStorage.getItem('taskItems');
    $scope.taskItem = (localStorage.getItem('taskItems')!==null) ? 
    JSON.parse($scope.saved) : [ {description: "add stuff to do", date: $scope.today, complete: false}];
    localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));
    
    $scope.newTask = null;
    $scope.newTaskDate = null;
    $scope.categories = [
        {name: 'Personal'},
        {name: 'Work'},
        {name: 'Class'},
        {name: 'Errands'},
        {name: 'Other'}
    ];
    $scope.newTaskCategory = $scope.categories;
    $scope.addNew = function () {
        if ($scope.newTaskDate == null || $scope.newTaskDate == '') {
            $scope.taskItem.push({
                description: $scope.newTask,
                date: "No deadline",
                complete: false,
                category: $scope.newTaskCategory.name
            }) 
        } else {
            $scope.taskItem.push({
                description: $scope.newTask,
                date: $scope.newTaskDate,
                complete: false,
                category: $scope.newTaskCategory.name
            })
        };
        $scope.newTask = '';
        $scope.newTaskDate = '';
        $scope.newTaskCategory = $scope.categories;
        localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));
    };
     $scope.removeTask = function (index) {
      $scope.taskItem.splice(index, 1);
      localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));
    };
    $scope.deleteTask = function () {
        var completedTask = $scope.taskItem;
        $scope.taskItem = [];
        angular.forEach(completedTask, function (taskItem) {
            if (!taskItem.complete) {
                $scope.taskItem.push(taskItem);
            }
        });
        localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));
    };
    $scope.save = function () {
        localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));      
    };

    //tubby animations
    
    var messageArray = ['yaaay :D', 'high five!', 'awesome!', 
                        '*dance dance*', 'super job!', 'cheeri-o!', 
                        'toodle-pip, my good sir!', '*do the jelly*',
                        'keep it up! :D', '*doffs cap*', "you're a rockstar"];   
    
    //animation - jelly
    $scope.tubbyJellyAng = function() {           
 		$(".taskCheckbox").change(function(){
            $(".tubbycat").removeClass("jelly-target");
            if($(this).is(":checked")) {    
                //$(".tubbycat").removeClass("jelly-target");
                 var rand = messageArray[Math.floor(Math.random()*messageArray.length)];                                                   
                $("#message").fadeIn("fast").html('<h1 class="tubbytext">'+rand+'</h1>');
                setTimeout(function() {
                            $("#message").fadeOut("slow");
                        }, 600);                   
                $(".tubbycat").addClass("jelly-target");
                
            } //else {
                //$(".tubbycat").removeClass("animated bounce");
            //}
        });
    };
    
    // animation - bounce
    $scope.tubbyBounceAng = function() {           
 		$(".taskCheckbox").change(function(){
            $(".tubbycat").removeClass("animated bounce");
            if($(this).is(":checked")) {    
                //$(".tubbycat").removeClass("animated bounce");
                var rand = messageArray[Math.floor(Math.random()*messageArray.length)];    
                $("#message").fadeIn("fast").html('<h1 class="tubbytext">'+rand+'</h1>');
                        setTimeout(function() {
                            $("#message").fadeOut("slow");
                        }, 600);                   
                $(".tubbycat").addClass("animated bounce");
                
            } //else {
                //$(".tubbycat").removeClass("animated bounce");
            //}
        });
    };
    
    
 
   	$scope.reOrder = function () { 
        var completedTask = $scope.taskItem;
        $scope.taskItem = [];
     	angular.forEach(completedTask, function (taskItem) {
                $scope.taskItem.push(taskItem);        
    	});
    	localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));
    };
});
