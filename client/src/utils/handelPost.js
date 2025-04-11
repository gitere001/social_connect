import axios from "axios";

// Create a Post
export const createPost = async (postData, apiUrl) => {
  try {
    const response = await axios.post(`${apiUrl}/posts/new-post`, postData, {
      withCredentials: true, // required to send session cookie
    });

    return {
      success: true,
      message: response.data.message,
      post: response.data.post,
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Post creation failed",
    };
  }
};

// Fetch User's Posts
export const fetchUsersPost = async (apiUrl) => {
  try {
    const response = await axios.get(`${apiUrl}/posts/my-posts`, {
      withCredentials: true,
    });

    return {
      success: true,
      posts: response.data.posts,
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Fetching posts failed",
    };
  }
};

// Fetch Other Users' Posts
export const fetchOtherUsersPost = async (apiUrl) => {
  try {
    const response = await axios.get(`${apiUrl}/posts/other-posts`, {
      withCredentials: true,
    });

    return {
      success: true,
      posts: response.data.posts,
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Fetching other users' posts failed",
    };
  }
};
