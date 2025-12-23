import { getAccessToken, getNowPlaying } from '../utils/spotify.js';

export const getCurrentlyPlaying = async (req, res, next) => {
  try {
    const accessToken = await getAccessToken();
    const nowPlaying = await getNowPlaying(accessToken);

    if (!nowPlaying || !nowPlaying.item) {
      return res.status(200).json({
        success: true,
        isPlaying: false,
        data: null
      });
    }

    const track = {
      isPlaying: nowPlaying.is_playing,
      title: nowPlaying.item.name,
      artist: nowPlaying.item.artists.map(artist => artist.name).join(', '),
      album: nowPlaying.item.album.name,
      albumImageUrl: nowPlaying.item.album.images[0]?.url,
      songUrl: nowPlaying.item.external_urls.spotify
    };

    res.status(200).json({
      success: true,
      data: track
    });
  } catch (error) {
    console.error('Spotify API error:', error);
    res.status(200).json({
      success: true,
      isPlaying: false,
      data: null
    });
  }
};
