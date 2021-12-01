var app = angular.module("myapp", []);
app.controller("mycont", function ($scope) {
  $scope.namesoftech = [
    { name: "java", likes: 0, dislikes: 0 },
    { name: "javaScript", likes: 0, dislikes: 0 },
    { name: "React", likes: 0, dislikes: 0 },
    { name: "angular", likes: 0, dislikes: 0 }
  ];

  $scope.newname = "";
  $scope.likefunc = function (tech) {
    tech.likes++;
  };

  $scope.dislikefunc = function (tech) {
    tech.dislikes++;
  };
  $scope.addtech = function () {
    if ($scope.newname != "") {
      var namesoftech1 = {
        name: $scope.newname,
        likes: 0,
        dislikes: 0
      };
      $scope.namesoftech.push(namesoftech1);
      $scope.newname = "";
    }
  };

  $scope.deletefunc = function (tech) {
    var i = $scope.namesoftech.indexOf(tech);
    $scope.namesoftech.splice(i, 1);
  };
});
