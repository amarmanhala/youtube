const MAX_RESULTS = 40;

export const YOUTUBE_POPULAR_VIDEO_LIST = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&key=" + process.env.REACT_APP_API_KEY + "&maxResults=" + MAX_RESULTS;

export const YOUTUBE_SEARCH_SUGGESTION_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_BASE_SEARCH_URL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=" + process.env.REACT_APP_API_KEY;

export const YOUTUBE_CHANNEL_LIST = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet&key=" + process.env.REACT_APP_API_KEY;

