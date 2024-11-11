import React from 'react';
import useSignUp from './use-sign-up';
import { Icons, Images } from 'assets';
import { Link } from 'react-router-dom';
import { CustomInput } from 'components/custom-input/custom-input';
import { CustomButton } from 'components/custom-button/custom-button';
import { CustomCheckbox } from 'components/custom-checkbox/custom-checkbox';

const SignUp = () => {
    const {
        errors,
        formData,
        isLoading,
        handleChange,
        handleSubmit,
        handleCheckboxClick,
        acceptTermsCondition
    } = useSignUp();

    return (
        <div className="min-h-screen grid grid-cols-[1fr_1fr] max-md:grid-cols-[1fr]">
            <div className="p-10 m-auto rounded-lg w-full max-w-[598px] flex-center flex-col border border-solid border-[#EAEAEA] max-2xl:my-4 max-sm:max-w-[300px] max-sm:p-5">
                <h2 className="text-3xl text-black font-semibold mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit} noValidate className="flex-center flex-col gap-4 w-full max-w-md">
                    <CustomInput
                        type="text"
                        name="username"
                        label="Username"
                        error={errors.username}
                        onChange={handleChange}
                        value={formData.username}
                        placeholder="Enter Username"
                    />
                    <CustomInput
                        type="email"
                        name="email"
                        label="Email Address"
                        error={errors.email}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Email Address"
                    />
                    <CustomInput
                        name="password"
                        type="password"
                        label="Password"
                        onChange={handleChange}
                        error={errors.password}
                        value={formData.password}
                        placeholder="Enter Password"
                    />
                    <CustomInput
                        type="password"
                        name="confirm_password"
                        onChange={handleChange}
                        label="Confirm Password"
                        error={errors.confirm_password}
                        value={formData.confirm_password}
                        placeholder="Enter Confirm Password"
                    />
                    <div className='flex self-baseline'>
                        <CustomCheckbox
                            onClick={handleCheckboxClick}
                            checked={acceptTermsCondition}
                            label="I Agree Terms & Conditions"
                            className="text-sm text-[#303030] font-medium"
                        />
                    </div>
                    <div className='w-full mt-4'>
                        <CustomButton
                            type="submit"
                            text="Sign Up"
                            disabled={isLoading}
                            isLoading={isLoading}
                            className="btn-primary w-full"
                        />
                    </div>
                </form>
                <div className="w-full grid items-center grid-cols-[1fr_auto_1fr] my-6">
                    <hr className="border-gray-300" />
                    <span className="px-3 text-sm text-[#303030]">Or sign up with</span>
                    <hr className="border-gray-300" />
                </div>
                <div className="w-full flex-center gap-3 max-sm:flex-wrap">
                    <CustomButton
                        text="Sign up with Google"
                        icon={<img src={Icons.google} alt="google" />}
                        className="h-[58px] w-full flex-center gap-2 text-sm text-[#132531] font-medium !bg-transparent rounded-[10px] border border-solid border-[#EAEAEA]"
                    />
                    <CustomButton
                        text="Sign up with Microsoft"
                        icon={<img src={Icons.microsoft} alt="microsoft" />}
                        className="h-[58px] w-full flex-center gap-2 text-sm text-[#132531] font-medium !bg-transparent rounded-[10px] border border-solid border-[#EAEAEA]"
                    />
                </div>
                <p className="mt-8 text-gray700">
                    Already have an account?
                    <Link to="/login" className="font-semibold text-greenActive ml-1">
                        Sign In
                    </Link>
                </p>
            </div>

            <div className="flex-between flex-col !items-baseline gap-3 h-full bg-gray900">
                <div className="ml-14 mt-14 w-[207px] h-[70px] max-md:ml-4 max-md:mt-4">
                    <img src={Images.logo} alt="logo" className='w-full h-full object-contain' />
                </div>
                <p className="text-[#B5B5B5] max-w-[525px] max-lg:max-w-[300px] max-sm:max-w-[400px]">
                    <span className="text-4xl font-semibold">“ Welcome ”</span>
                    <span className="text-3xl font-normal">
                        {' '}
                        to the CRM that works the way you do
                    </span>
                </p>
                <div className="w-full max-w-[479px] ml-auto max-2xl:max-w-[400px] max-sm:max-w-[250px]">
                    <img src={Images.moto} alt="moto" className="w-full h-full object-contain" />
                </div>
            </div>
        </div>
    );
};

export default SignUp