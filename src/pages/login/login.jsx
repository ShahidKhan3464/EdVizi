import React from 'react';
import useLogin from './use-login';
import { Icons, Images } from 'assets';
import { Link } from 'react-router-dom';
import { CustomInput } from 'components/custom-input/custom-input';
import { CustomButton } from 'components/custom-button/custom-button';
import { CustomCheckbox } from 'components/custom-checkbox/custom-checkbox';

const Login = () => {
  const {
    errors,
    formData,
    isLoading,
    handleChange,
    handleSubmit,
    handleCheckboxClick
  } = useLogin();

  return (
    <div className="min-h-screen grid grid-cols-[1fr_1fr] max-md:grid-cols-[1fr]">
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
        <div className="w-full max-w-[479px] ml-auto max-2xl:max-w-[320px] max-sm:max-w-[250px]">
          <img src={Images.moto} alt="moto" className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="p-10 m-auto rounded-lg w-full max-w-[598px] flex-center flex-col border border-solid border-[#EAEAEA] max-2xl:my-4 max-sm:max-w-[300px] max-sm:p-5">
        <h2 className="text-3xl text-black font-semibold mb-6">Sign In</h2>
        <form onSubmit={handleSubmit} noValidate className="w-full max-w-md">
          <div className='mb-5'>
            <CustomInput
              type="email"
              name="email"
              error={errors.email}
              label="Email Address"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
            />
          </div>
          <div className='mb-2'>
            <CustomInput
              name="password"
              type="password"
              label="Password"
              onChange={handleChange}
              error={errors.password}
              value={formData.password}
              placeholder="Enter Password"
            />
          </div>
          <div className='flex-between gap-2 mb-10'>
            <CustomCheckbox
              label="Remember me"
              checked={formData.rememberMe}
              onClick={handleCheckboxClick}
              className="text-sm text-[#303030] font-medium"
            />
            <a
              href="##"
              className="text-sm text-gray900 font-medium"
            >
              Forgot Password?
            </a>
          </div>
          <CustomButton
            type="submit"
            text="Sign In"
            disabled={isLoading}
            isLoading={isLoading}
            className="btn-primary w-full"
          />
        </form>
        <div className="w-full grid items-center grid-cols-[1fr_auto_1fr] my-6">
          <hr className="border-gray-300" />
          <span className="px-3 text-sm text-[#303030]">Or sign in with</span>
          <hr className="border-gray-300" />
        </div>
        <div className="w-full flex-center gap-3 max-sm:flex-wrap">
          <CustomButton
            text="Sign in with Google"
            icon={<img src={Icons.google} alt="google" />}
            className="h-[58px] w-full flex-center gap-2 text-sm text-[#132531] font-medium !bg-transparent rounded-[10px] border border-solid border-[#EAEAEA]"
          />
          <CustomButton
            text="Sign in with Microsoft"
            icon={<img src={Icons.microsoft} alt="microsoft" />}
            className="h-[58px] w-full flex-center gap-2 text-sm text-[#132531] font-medium !bg-transparent rounded-[10px] border border-solid border-[#EAEAEA]"
          />
        </div>
        <p className="mt-6 text-gray700">
          Don’t have an account?{' '}
          <Link to="/sign-up" className="font-semibold text-greenActive ml-1">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;