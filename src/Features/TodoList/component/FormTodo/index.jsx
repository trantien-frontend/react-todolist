import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/FormControls/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
// import InputField from '../../../../components/FormControls/InputField';


FormTodo.propTypes = {
    onSubmit: PropTypes.func,
};
FormTodo.defaultProps = {
    onSubmit: null,
};
function FormTodo(props) {
    const { onSubmit } = props;
    const schema = yup.object().shape({
        title: yup.string().required('Please Enter title').min(5, "less 5 character"),
    });

    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema),
    });
    const handelSubmit = (values) => {
        if (!onSubmit) return;
        onSubmit(values);
        form.reset();
    }
    return (
        <form onSubmit={form.handleSubmit(handelSubmit)}>
            <InputField name="title" label="Todo" form={form} />
        </form>
    );
}

export default FormTodo;