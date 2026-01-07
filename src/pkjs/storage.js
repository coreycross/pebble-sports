function storedFavorites() {
  var storedOrNull = localStorage.getItem("favorites");
  if (storedOrNull == null) {
    return [];
  } else {
    try {
      return JSON.parse(storedOrNull);
    } catch (e) {
      console.log("favorites parse error, clearing stored favorites");
      localStorage.removeItem("favorites");
      return [];
    }
  }
}
function updateFavorite(favoriteTeam) {
  var currentFavorites = storedFavorites();
  if (
    currentFavorites.some(function (ft) {
      return ft.sport == favoriteTeam.sport && ft.teamID == favoriteTeam.teamID;
    })
  ) {
    //remove the updating favoriteTeam
    currentFavorites = currentFavorites.filter(function (ft) {
      return ft.sport != favoriteTeam.sport || ft.teamID != favoriteTeam.teamID;
    });
    localStorage.setItem("favorites", JSON.stringify(currentFavorites));
    return false;
  } else {
    currentFavorites.push(favoriteTeam);
    localStorage.setItem("favorites", JSON.stringify(currentFavorites));
    return true;
  }
}

module.exports = {
  storedFavorites: storedFavorites,
  updateFavorite: updateFavorite,
};
