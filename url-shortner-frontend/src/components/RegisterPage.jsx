

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from './TextField';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api';
import toast from 'react-hot-toast';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    mode: 'onTouched',
  });

  const registerHandler = async (data) => {
    setLoader(true);
    try {
      const { data: response } = await api.post('/api/auth/public/register', data);
      reset();
      navigate('/login');
      toast.success('Registration Successful!');
    } catch (error) {
      console.log(error);
      toast.error('Registration Failed!');
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-background flex justify-center items-center text-textPrimary font-roboto">
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="sm:w-[450px] w-[360px] shadow-custom bg-surface py-8 sm:px-8 px-4 rounded-md border border-borderColor"
      >
        <h1 className="text-center text-primary font-bold text-3xl mb-1">Register for MiniLink</h1>
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
            label="Email"
            required
            id="email"
            type="email"
            message="*Email is required"
            placeholder="Type your email"
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
          {loader ? 'Loading...' : 'Register'}
        </button>

        <p className="text-center text-sm text-textSecondary mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-accent font-semibold underline hover:text-textPrimary">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
