import React from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile';

// fixme might need to set key
function Tiles(props) {
    return (
        <div className="allTiles">
            {props.stories.map(story => (
                <Tile key={story.name} story={story} />
            ))}
        </div>
    )
}

Tiles.propTypes = {
    stories: PropTypes.array.isRequired,
}

export default Tiles
