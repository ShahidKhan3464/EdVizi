import { useState } from 'react';

function useSignUp() {
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [acceptTermsCondition, setAcceptTermsCondition] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirm_password: '',
    });

    // Validation for all fields
    const validate = () => {
        const newErrors = {};

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        // Username validation
        if (!formData.username) {
            newErrors.username = 'Username is required';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        // Confirm password validation
        if (!formData.confirm_password) {
            newErrors.confirm_password = 'Confirm password is required';
        } else if (formData.password !== formData.confirm_password) {
            newErrors.confirm_password = 'Passwords do not match';
        }

        // // Terms and conditions validation
        // if (!acceptTermsCondition) {
        //     newErrors.terms = 'You must accept the terms and conditions';
        // }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxClick = () => {
        setAcceptTermsCondition(prev => !prev)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        // setIsLoading(true);

        // try {
        //     // Replace with actual sign-in API call
        //     await fakeSignInAPI(formData);
        //     alert('Sign in successful');
        // } catch (error) {
        //     setErrors({ submit: 'Invalid email or password' });
        // } finally {
        //     setIsLoading(false);
        // }
    };

    return {
        errors,
        formData,
        isLoading,
        handleChange,
        handleSubmit,
        handleCheckboxClick,
        acceptTermsCondition,
    };
}

export default useSignUp;
