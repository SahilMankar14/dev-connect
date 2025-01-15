import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold">
          DevConnect
        </Link>

        <div className="space-x-4">
          {user ? (
            <>
              <Link to="/dashboard" className="text-white">
                Dashboard
              </Link>
              <button
                onClick={logOut}
                className="text-white hover:text-gray-300"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white">
                Login
              </Link>
              <Link to="/register" className="text-white">
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
