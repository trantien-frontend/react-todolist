import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import "./styles.scss"
AlbumList.propTypes = {
    albumList: PropTypes.array,
};
AlbumList.defaultProps = {
    albumList: [],
}

function AlbumList(props) {
    const { albumList } = props;
    return (
        <div className="AlbumList">
            {albumList.map(item =>
                <div key={item.id} className="AlbumList__item">
                    <Album album={item} />
                </div>
            )}
        </div>
    );
}

export default AlbumList;