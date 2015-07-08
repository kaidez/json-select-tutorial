var teams = {
  "chelsea": {
    "playerOne": {
      "name": "Didier Drogba",
      "position": "Center Forward",
      "number": 11,
      "country": "Ivory Coast"
    },
    "playerTwo": {
      "name": "Thibault Courtois",
      "position": "Goalkeeper",
      "number": 1
    }
  },
  "acmilan": {
    "playerOne": {
      "name": "Pirlo",
      "position": "Center Forward",
      "number": 11,
      "country": "Ivory Coast"
    },
    "playerTwo": {
      "name": "Thibault Courtois",
      "position": "Goalkeeper",
      "number": 1
    }
  }
};
// var selector01 = ".acmilan";
// var selector02 = ".chelsea";

// var what = JSONSelect.compile(selector02).match(teams);
// console.log(what);

document.getElementById('container').innerHTML = what;