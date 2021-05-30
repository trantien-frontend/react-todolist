import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Album.propTypes = {
    album: PropTypes.object,
};
Album.defaultProps = {
    album: {},
}
function Album(props) {
    const { album } = props;
    return (
        <div className="item">
            <img src={album.imageUrl} alt="" />
            <a href="#">{album.title}</a>
        </div>
    );
}

export default Album;