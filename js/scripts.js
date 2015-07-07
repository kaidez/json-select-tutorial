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
  }
};

var what = JSONSelect.match("* > .position", teams);
document.getElementById('container').innerHTML = what;