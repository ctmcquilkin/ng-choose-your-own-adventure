var choose = angular.module('root', [])
  .controller("chooseCtrl", ['$scope', function($scope) {
    // Contains the story and paths
    var story = {
      intro: {
        prompt: 'You are approaching the moon in a fancy new space ship. Which side do you land on?',
        options: [{
          name: 'Dark Side',
          path: 'Space_Junk'
        }, {
          name: 'Near Side',
          path: 'Ignore'
        }]
      },
      Space_Junk: {
        prompt: 'You land on the Dark side and there\'s a strange pile of wreckage next to your lander.',
        options: [{
          name: 'Investigate!',
          path: 'Investigate'
        }, {
          name: 'Ignore it.',
          path: 'Ignore'
        }]
      },
      Investigate: {
        prompt: 'You find that it doesn\'t look like the wreckage of a NASA lander. What do you do next?',
        options: [{
          name: 'Blast it!',
          path: 'Blast'
        }, {
          name: 'Phone home for help.',
          path: 'phone_home'
        }]
      },
      phone_home: {
        prompt: 'Mission control here, it\' your call!',
        options: [{
          name: 'Abort the mission. Blast off and return to Earth.',
          path: 'abort'
        }, {
          name: 'Blast it!',
          path: 'Blast'
        }]
      },
      Blast: {
        prompt: 'Aliens climb out and blast you. You\'r dead.',
        options: [{
          name: 'Start Again',
          path: 'intro'
        }]
      },
      abort: {
        prompt: 'Your lander blasts off successfully and you return to Earth.',
        options: [{
          name: 'Start Again',
          path: 'intro'
        }]
      },
      Ignore: {
        prompt: 'You have a successful (boring) mission and return to Earth.',
        options: [{
          name: 'Start Again',
          path: 'intro'
        }]
      }
  };

  $scope.showQuestion = function() {
    //
    console.log('show question clicked');
  }

  /**
   * Chosen option is an object with properties {name, path}
   */
  $scope.display_scenario = function (chosen_option) {
    var option_path = chosen_option.path;
    $scope.option_name = chosen_option.name;
    $scope.scenario = story[option_path];
  };
  // Start the story
  $scope.display_scenario({
    name: null,
    path: 'intro'
  });

}]);