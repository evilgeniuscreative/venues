/*/--------------  GOOGLE IMAGES  ----------------/*/

    const { getJson } = require("serpapi");

    getJson({
      engine: "google",
      q: encodeURIComponent(searchTerm),
      api_key: process.env.SERP_API_KEY,
    }, (json) => {
      console.log(json["organic_results"]);
    });
    return json["organic_results"];

/*/--------------  END  ----------------/*/

