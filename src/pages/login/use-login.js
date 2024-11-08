import { useState } from 'react';

function useLogin() {
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    // Validation for email and password
    const validate = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }
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
        setFormData((prevData) => ({
            ...prevData,
            rememberMe: !prevData.rememberMe,
        }));
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
        handleCheckboxClick
    };
}

export default useLogin;
