// services/authService.ts
import axios from 'axios';
import type { AuthResponse, SignupData } from '../types/signup';

const API_BASE_URL = 'http://localhost:5000/api';

// Simple signup function
export const signupUser = async (userData: SignupData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, {
      ...userData,
      confirmPassword: userData.password // Backend expects confirmPassword
    });
    return response;
  } catch (error) {
    console.error('Signup API error:', error);
    throw error;
  }
};