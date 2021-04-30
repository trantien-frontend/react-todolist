import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};
PostFiltersForm.defaultProps = {
    onSubmit: null,
}

function PostFiltersForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
        if (!onSubmit) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
            console.log('clear');
        }

        typingTimeoutRef.current = setTimeout(() => {

            const formValues = {
                searchTerm: e.target.value,
            }
            onSubmit(formValues);

        }, 500)
    }
    return (
        <form>
            <input type="text" name="a" id="c" value={searchTerm} onChange={handleSearchTermChange} />
        </form>
    );
}

export default PostFiltersForm;