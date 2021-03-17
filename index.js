
function superbowlWin(games) {
  function isWin(elem, index, arr) {
    return (elem.result === "W");
  }
  if (games.find(isWin)) {
    return games.find(isWin).year;
  }
}
