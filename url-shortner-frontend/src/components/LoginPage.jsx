

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from './TextField';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api';
import toast from 'react-hot-toast';
import { useStoreContext } from '../contextApi/ContextApi';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const { setToken } = useStoreContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onTouched',
  });

  const loginHandler = async (data) => {
    setLoader(true);
    try {
      const { data: response } = await api.post('/api/auth/public/login', data);
      setToken(response.token);
      localStorage.setItem('JWT_TOKEN', JSON.stringify(response.token));
      toast.success('Login Successful!');
      reset();
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
      toast.error('Login Failed!');
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-background flex justify-center items-center text-textPrimary font-roboto">
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="sm:w-[450px] w-[360px] shadow-custom bg-surface py-8 sm:px-8 px-4 rounded-md border border-borderColor"
      >
        <h1 className="text-center text-primary font-bold text-3xl mb-1">Login to MiniLink</h1>
        <hr className="border-borderColor my-4" />

        <div className="flex flex-col gap-4">
          <TextField
            label="Username"
            required
            id="username"
            type="text"
            message="*Username is required"
            placeholder="Type your username"
            register={register}
            errors={errors}
          />

          <TextField
            label="Password"
            required
            id="password"
            type="password"
            message="*Password is required"
            placeholder="Type your password"
            register={register}
            min={6}
            errors={errors}
          />
        </div>

        <button
          disabled={loader}
          type="submit"
          className="mt-6 w-full bg-primary text-white py-2 rounded hover:bg-secondary transition-colors"
        >
          {loader ? 'Loading...' : 'Login'}
        </button>

        <p className="text-center text-sm text-textSecondary mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-accent font-semibold underline hover:text-textPrimary">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
