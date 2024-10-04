import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import "./CustomInputField.scss";

const CustomPasswordField = ({ label, name, validation, required }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { register, formState: { errors } } = useFormContext();

    return (


        <Form.Group className="position-relative  custom-input" controlId="InputPassword1">
            <Form.Label className="login-input-label">{label}</Form.Label>
            <Form.Control
                placeholder="Enter Password"
                {...register(name, { ...validation, required: required && 'This field is required' })}

                type={passwordVisible ? "text" : "password"} className="login-input" />
            <Button
                className="btn btn-primary text-black show-hide-btn position-absolute"
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
            >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </Button>

            {errors[name] && <span className="text-danger">{errors[name].message}</span>}

        </Form.Group>
    );
};

export default CustomPasswordField;
