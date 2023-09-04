function getImagesForActivePlayers(player) {
  let name = player.nickname
    .toUpperCase()
    .replace(" ", "")
    .replace("-", "")
    .replace(" ", "");
  let lastName = player.lastname
    .toUpperCase()
    .replace(" ", "")
    .replace("-", "")
    .replace(" ", "");
  console.log(name, lastName);

  let baseUrl = process.env.PUBLIC_URL;
  let urlJPEG = `${baseUrl}/Active Roster Player Assets/${name}_${lastName}_${player.jersey_number}.jpeg`;
  let urlPNG = `${baseUrl}/Active Roster Player Assets/${name}_${lastName}_${player.jersey_number}.png`;

  console.log("URLs:", urlJPEG, urlPNG);

  if (urlJPEG) {
    return urlJPEG;
  }

  if (urlPNG) {
    return urlPNG;
  }
}

export { getImagesForActivePlayers };
