import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();

  return (
    <nav className="bg-blue-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-black text-2xl font-bold ">
          DevConnect
        </Link>

        <div className="space-x-4">
          {user ? (
            <>
              <Link to="/dashboard" className="text-black text">
                Dashboard
              </Link>
              <button
                onClick={logOut}
                className="text-black hover:text-gray-300"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-black">
                Login
              </Link>
              <Link to="/register" className="text-black">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
