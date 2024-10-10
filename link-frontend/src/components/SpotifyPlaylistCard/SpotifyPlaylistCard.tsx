import React from 'react';

const SpotifyPlaylistCard: React.FC = () => {
    return (
        <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/5ZftVALFvjLMPhFaECQoWX?utm_source=generator"
            width="100%"
            height="450"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        ></iframe>
    );
};

export default SpotifyPlaylistCard;
