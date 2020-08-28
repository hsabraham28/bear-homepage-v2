import React from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile';

// fixme might need to set key
function Tiles(props) {
    const mappedStories = props.stories.map(story => {
        return <Tile key={story.id} story={story} />
    })

    
    return (
        <div className="allTiles">
            {mappedStories}
        </div>
    )
}

Tiles.propTypes = {
    stories: PropTypes.array.isRequired,
}

export default Tiles
