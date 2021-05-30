import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

Albums.propTypes = {

};

function Albums(props) {
    const albumList = [
        {
            id: 1,
            title: "đỉnh cao ost",
            imageUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/d/e/4/d/de4d2f3fcaf1fc72499ea79a0722e996.jpg',
        },
        {
            id: 2,
            title: "Nhạc Phim Việt Nam Hay Nhất",
            imageUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/7/b/b/27bb2f16fa56ec6c2f1fd5bbf688e854.jpg',
        },
        {
            id: 3,
            title: "Tách Cà Phê Cùng Nhạc Phim",
            imageUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/8/c/7/48c708f137d63ff53e2f5b4df38bea1a.jpg',
        },
        {
            id: 4,
            title: "Phim HOT! Nhạc HAY!",
            imageUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/9/a/9/49a998989baeefe2f23a5d2e2dad6d7e.jpg',
        },
        {
            id: 5,
            title: "Nhạc Việt Được Nghe Nhiều Nhất",
            imageUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/9/e/8/79e8ee6cf0e8a2585ab510d4dd9a33e0.jpg',
        },
        {
            id: 6,
            title: "Thay Lời Muốn Nói: Gọi Tên Bốn Mùa",
            imageUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/c/f/a/7cfa134b3d700cdfac63ff7704f359d9.jpg',
        }
    ]
    return (
        <div>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default Albums;