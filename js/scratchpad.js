/**
* Created with toodler.
* User: lishiyo
* Date: 2014-07-02
* Time: 01:40 AM
* for stuff that totally didn't work
*/

//animation for tubbycat
    var checked = true;
    $scope.testAlert = function () {       
       if (checked) {
           $("#message").fadeIn("fast", function() {
           $("#message").fadeIn("slow").html('<h1 class="tubbytext">yay!</h1>');
            setTimeout(function() {
            	$("#message").fadeOut("slow");
        	}, 800);
       	}); 
           $(".tubbycat").addClass("animated bounce");
           checked = false;
       } else {
           $(".tubbycat").removeClass("animated bounce");
           checked = true;
       };
        
           	
       if (!($scope.taskItem.complete)) {
           $(".tubbycat").toggleClass("animated bounce");
       };
       
       if (!$('input.input-group[type="text"]').hasClass("complete-true")) {
           $(".tubbycat").toggleClass("animated bounce");           
       } else {
           $(".tubbycat").removeClass("animated bounce");
       };  
       
    };
