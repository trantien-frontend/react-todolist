import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
PostList.propTypes = {
    postList: PropTypes.array,
};

function PostList(props) {
    const { postList } = props;
    return (
        <ul className="post-list">
            {postList.map(post =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
}

export default PostList;