import React from "react";
import { useContext } from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../Context/Firebase/Authprovider";
import img1 from "../../assets/images/Na_Nov_26.jpg";

const Errorpage = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const error = useRouteError();

  const handlelogout = () => {
    logout()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="mb-20">
      <div>
        <img src={img1} alt="" />
      </div>
      <div>
        <p className="text-3xl text-center font-semibold">
          There is NO Page,Please Work hard
        </p>
        <p className="text-3xl text-center text-red-500">
          <i>{error.statusText || error.message}</i>
        </p>
        <h1 className="text-center">
          please
          <Link to={"/login"}>
            <button
              className="text-3xl font-bold text-green-500 ml-2"
              onClick={handlelogout}
            >
              LogOut
            </button>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Errorpage;
