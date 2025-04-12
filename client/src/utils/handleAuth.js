import axios from "axios";

// Register User
export const registerUser = async (formData, apiUrl) => {
  try {
    const response = await axios.post(`${apiUrl}/api/auth/register`, formData);
    return {
      success: true,
      message: response.data.message,
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Registration failed",
    };
  }
};

// Login User
export const loginUser = async (formData, apiUrl) => {
  console.log("apiUrl", apiUrl);
  try {
    const response = await axios.post(`${apiUrl}/api/auth/login`, formData, {
      withCredentials: true, // for session cookie
    });
    return {
      success: true,
      message: response.data.message,
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Login failed",
    };
  }
};

// Logout User
export const logoutUser = async (apiUrl) => {
  try {
    const response = await axios.post(`${apiUrl}/api/auth/logout`, {}, {
      withCredentials: true,
    });
    return {
      success: true,
      message: response.data.message,
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Logout failed",
    };
  }
};

const checkIfUserIsLoggedIn = async (apiUrl) => {
  try {
    const response = await axios.get(`${apiUrl}/api/auth/check-auth`, {
      withCredentials: true,
    });

    if (response.status === 200 && response.data.loggedIn) {
      return { isLogged: true };
    } else {
      return { isLogged: false };
    }
  } catch (error) {
    console.log(error);
    return { isLogged: false };
  }
};
export default checkIfUserIsLoggedIn