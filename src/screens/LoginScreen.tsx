import React, { useEffect, useState } from "react";
import dictLogo from "../assets/dict-logo-hz.png";
import { useForm } from "react-hook-form";

interface LoginForm {
  email: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const [theme, setTheme] = useState("light");
  const { register, handleSubmit, setValue } = useForm<LoginForm>();

  useEffect(() => {
    const htmlElement = document.querySelector("html");

    if (htmlElement) {
      htmlElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const submitForm = async (data: LoginForm) => {
    try {
      const response = await fetch("http://192.168.10.92:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="text-center lg:text-left">
              <img src={dictLogo} alt="DICT-LOGO" className="pt-6" />
            </div>

            <div className="card-body pt-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email")}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password")}
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginScreen;
