// data/signup.ts
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { SignupFormData, SignupErrors } from '../types/signup';
import { signupUser } from '../services/authService';

export const useSignup = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<SignupErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name as keyof SignupErrors]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validate = (): SignupErrors => {
    const newErrors: SignupErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    if (!formData.email || !formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const response = await signupUser({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      console.log('Signup successful:', response.data);
      
      // Store token and user data
      localStorage.setItem('authToken', response.data.data.token);
      localStorage.setItem('userData', JSON.stringify(response.data.data.user));
      
      // Navigate to login or dashboard
      navigate('/login', { 
        state: { 
          message: 'Account created successfully! Please sign in.' 
        } 
      });

    } catch (error: any) {
      console.error('Signup failed:', error);
      
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        setErrors({ 
          general: error.response?.data?.message || 'Signup failed. Please try again.' 
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    console.log('Google sign-up coming soon!');
    setErrors({ general: 'Google signup coming soon!' });
  };

  return {
    formData,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
    handleGoogleSignup,
  };
};