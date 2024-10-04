import React from 'react';
import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import "./CustomInputField.scss";

const CustomInputField = ({ label, name, type = 'text', validation, required, placeholder }) => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <Form.Group className="position-relative custom-input">
            <Form.Label className="">
                {label} 
                {required && <span className="text-danger">*</span>}
            </Form.Label>
            <Form.Control
                placeholder={placeholder}
                type={type}
                className="login-input"
                {...register(name, { ...validation, required: required && 'This field is required' })}
            />
            {errors[name] && <span className="text-danger">{errors[name].message}</span>}
        </Form.Group>
    );
};

export default CustomInputField;
