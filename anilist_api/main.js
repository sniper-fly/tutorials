const axios = require("axios");

async function getAnime() {
  const query = `
          query ($page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
      }
      media(search: $search, type: ANIME, sort: FAVOURITES_DESC) {
        id
        title {
          romaji
          english
          native
        }
        type
        genres
      }
    }
  }
  `;

  let variables = {
    search: query,
    page: 1,
    perPage: 3,
  };

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const result = await axios({
    method: 'post',
    query,
    variables,
    headers
  }).catch((err) => console.log(err.message));

  console.log(result.data.data.Page.media); // this returns an array of the the results that corresponds to the options we passed in
}

getAnime();
