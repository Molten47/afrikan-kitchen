import { useState } from "react";
import type { LoginFormData, LoginErrors } from "../types/login";

export const useLogin = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  
  const [errors, setErrors] = useState<LoginErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name as keyof LoginErrors]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validate = (): LoginErrors => {
    const newErrors: LoginErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Form submission logic would go here
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleGoogleSignIn = () => {
    // Google sign-in logic would go here
    console.log('Google sign-in initiated');
  };

  return {
    formData,
    errors,
    submitted,
    setSubmitted,
    handleChange,
    handleSubmit,
    handleGoogleSignIn,
  };
};

