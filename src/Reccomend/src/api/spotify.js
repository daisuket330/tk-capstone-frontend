const BASE_URL = 'https://api.spotify.com/v1';
const TOKEN = 'BQB6jbYGjjnqks4Bp24dr-9VTnl1oACgEsDRrM3GnolGDn0vxhDHrz5_y-bhci3C5LobAHLal62TnzENSm2ubcakeS2FrYlvm7XExhT4-oBWMrcCUiG2_9-xuZ9SaBIqSanrgDkngF4';
const HEADERS = {
  'Authorization': `Bearer ${TOKEN}`,
  'Content-Type': 'application/json',
};

const qs = (params) => Object.entries(params).map(([k, v]) => `${k}=${v}`).join('&');

export default {
  /**
   * Uses Spotify search API with type: artist to find matches for the given artist name
   */
  searchArtists: async (name) => {
    const queryParams = {
      q: name,
      type: 'artist',
      limit: 10,
    };

    const url = `${BASE_URL}/search?${qs(queryParams)}`;
    const options = {
      method: 'GET',
      headers: HEADERS,
    };

    const result = await fetch(url, options);
    const body = await result.json();
    return result.status === 200 ? body.artists.items : [];
  },

  /**
   * Uses Spotify artist API to get related artists for the given artist ID
   */
  fetchRelatedArtists: async (artistID) => {
    const url = `${BASE_URL}/artists/${artistID}/related-artists`;
    const options = {
      method: 'GET',
      headers: HEADERS,
    };

    const result = await fetch(url, options);
    const body = await result.json();
    return result.status === 200 ? body.artists : [];
  },

  /**
   * Gets the top tracks for a given artist
   */
  getArtistTopTracks: async (artistID) => {
    const queryParams = {
      country: 'SG',
    };

    const url = `${BASE_URL}/artists/${artistID}/top-tracks?${qs(queryParams)}`;
    const options = {
      method: 'GET',
      headers: HEADERS,
    };

    const result = await fetch(url, options);
    const body = await result.json();
    return result.status === 200 ? body.tracks : [];
  },

  /**
   * Gets recommendations for a given list of seed artists and track attribute targets
   */
  getRecommendations: async (seedArtists, targets) => {
    const queryParams = {
      ...targets,
      seed_artists: seedArtists.join(','),
      limit: 50,
    };

    const url = `${BASE_URL}/recommendations?${qs(queryParams)}`;
    const options = {
      method: 'GET',
      headers: HEADERS,
    };

    const result = await fetch(url, options);
    const body = await result.json();
    return result.status === 200 ? body.tracks : [];
  },
};