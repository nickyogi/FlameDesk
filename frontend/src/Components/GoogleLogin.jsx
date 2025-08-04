import React from "react";
import axios from "axios";
import { auth, provider } from "../Utils/Firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const API_URL = "https://flamedesk-backend.onrender.com";

function GoogleLogin({onSubmit}) {

  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await signInWithPopup(auth, provider);

    const userData = {
      name: response.user.displayName,
      email: response.user.email,
      password: response.user.uid + response.user.email,
    };

    try {
      const { data } = await axios.post(
        `${API_URL}/api/user/googleLogin`,
        userData
      );
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.user.id);

      onSubmit?.({ token: data.token, userId: data.user.id, ...data.user });

      setTimeout(() => navigate("/home"), 1000);
    } catch (err) {
      console.error("Signup error :", err);
    }
  };

  return (
    <button
      onClick={handleLogin}
      type="button"
      className="w-full bg-white bg-opacity-70 hover:bg-opacity-90 text-purple-700 hover:text-purple-900 tracking-wider font-semibold text-sm py-3 rounded-lg border border-purple-200 transition-all duration-200 flex items-center justify-center space-x-2"
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google logo"
        className="w-5 h-5"
      />
      <span>Continue with Google</span>
    </button>
  );
}

export default GoogleLogin;
