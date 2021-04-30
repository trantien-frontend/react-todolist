import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import Pagination from './components/Pagination';
import PostFitlersForm from './components/PostFiltersForm';
import PostList from './components/PostList';
import "./styles.scss";

LearnHook.propTypes = {

};

function LearnHook(props) {
    // state-post-list
    const [postList, setPostList] = useState([]);
    // state-pagination
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1,
    });
    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 10,
    });

    const handlePageChange = (newPage) => {
        const newFilters = {
            ...filters,
            _page: newPage,
        }
        setFilters(newFilters);
    }
    useEffect(() => {
        async function fetchPostList() {
            const paramString = queryString.stringify(filters);
            const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
            const respone = await fetch(requestUrl);
            const responJSON = await respone.json();
            const { data, pagination } = responJSON;
            setPagination(pagination);
            setPostList(data);
        }
        fetchPostList();
    }, [filters]);

    useEffect(() => {
        console.log('CheckList');
    }, [])

    const handelFiltersChange = (newFilters) => {
        setFilters({
            ...filters,
            _page: 1,
            title_like: newFilters.searchTerm,
        });
    };

    return (
        <div className="post-list">
            <h3 className="post-list__title">Post-List</h3>

            <PostFitlersForm onSubmit={handelFiltersChange} />

            <PostList postList={postList} />

            <Pagination pagination={pagination} onPageChange={handlePageChange} />
        </div>
    );
}

export default LearnHook;