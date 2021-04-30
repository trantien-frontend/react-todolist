import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/FormControls/InputField';
import { useForm } from 'react-hook-form';

FormTodo.propTypes = {
    onSubmit: PropTypes.func,
};
FormTodo.defaultProps = {
    onSubmit: null,
};
function FormTodo(props) {
    const form = useForm({
        defaultValues: {
            title: '',
        }
    });
    const handelSubmit = (values) => {
        console.log('To-do-form', values);
    }
    return (
        <form onSubmit={form.handleSubmit(handelSubmit)}>
            <InputField name="title" label="Todo" form={form} />
        </form>
    );
}

export default FormTodo;