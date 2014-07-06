toodle
==============

Based on NoGo (see codepen), a simple todo application built with angularJS. 
Uses localstorage to store todo items locally.

Latest update 
==============

NOTES (from toodler original)

the script "tubbyBounceAng" works only AFTER you have clicked a checkbox
after the document load (first time load). The latest taskItem added (on the bottom) 
does not work the first time you click. Ng-repeat/ng-model interfering? 

use the $scope angular (app.js) rather than jquery script because the script doesn't
work for new taskItems in the same document load (doesn't recognize the new checkboxes)

NOTES (on Userapp)

seems to be working now in Angular, need to add other partials