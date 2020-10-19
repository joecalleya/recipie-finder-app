"use strict";

var apiCall = function apiCall() {
  var grabRecipes = function grabRecipes() {
    var request, data;
    return regeneratorRuntime.async(function grabRecipes$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch("https://www.themealdb.com/api/json/v1/1/random.php"));

          case 2:
            request = _context.sent;
            _context.next = 5;
            return regeneratorRuntime.awrap(request.json());

          case 5:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  grabRecipes().then(function (recipieData) {
    // console.log("index.html 16 |data", recipieData);
    var recipe = recipieData.meals[0];
    console.log(recipe);
    return recipe;
  });
};

apiCall();