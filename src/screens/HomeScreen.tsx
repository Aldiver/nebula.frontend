import heroImage from "../assets/lofi-girl-pc.gif";
import Lottie from "lottie-react";
import animationData from "../assets/lotties/hero-lottie.json";
const HomeScreen: React.FC = () => {
  const defaultOptions: any = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end mx-6">
          <button className="btn btn-ghost btn-circle mx-2">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
            </div>
          </button>
          <a className="btn btn-outline">Let's Connect</a>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <div
              tabIndex={0}
              className="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content mb-6"
            >
              <div className="collapse-title flex">
                <h2 className="text-2xl font-bold"> Welcome to my Portfolio</h2>
              </div>
              <div className="collapse-content">
                <p>Kyaaaaah!!!</p>
              </div>
            </div>
            <h1 className="text-5xl font-bold">Hi, I'm Aldiver Alcoriza!</h1>
            <p className="py-6">Engineer | Web Developer | Tech Enthusiast</p>
            <button className="btn btn-secondary btn-outline btn-xs">
              Get Started
            </button>
          </div>
          {/* <img src={heroImage} className="max-w-sm rounded-lg shadow-2xl " /> */}
          <Lottie animationData={animationData} loop={true} className="w-4/5" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
