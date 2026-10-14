import axios from "axios";
import Error from "./errorpage";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    const response = await axios.get(
      "https://6ac7640975a4ce3fe721b0d9.mockapi.io/users",
    );
    const users = response.data;
     const userData = users.find((user) => {
    return user.email === data.Email && user.password === data.Password;
});
    if (userData) {
      navigate("/home");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="flex p-6 justify-center items-center">
      <div className="w-full max-w-md m-3 bg-white p-8 shadow-md rounded-xl">
        <h1 className="text-4xl text-center font-bold text-gray-900">
          Login page
        </h1>
        <form action="" onSubmit={handleSubmit(submit)}>
          {/* name */}

          <div className="flex flex-col gap-1 mt-4">
            <label htmlFor="">Email:</label>
            {errors.Email && <Error message={errors.Email.message} />}
            <input
              type="email"
              name="Email"
              id=""
              placeholder="Enter Your Email"
              className="border rounded p-2"
              {...register("Email", {
                required: {
                  value: true,
                  message: "Email is Required!",
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email!",
                },
              })}
            />
          </div>
          {/* password */}
          <div className="flex flex-col gap-1 mt-4">
            <label htmlFor="">Password:</label>
            {errors.Password && <Error message={errors.Password.message} />}
            <input
              type="password"
              name="Password"
              id=""
              placeholder="Create Password"
              className="border rounded p-2"
              {...register("Password", {
                required: {
                  value: true,
                  message: "password is Required!",
                },
                minLength: {
                  value: 8,
                  message: "password atleast 8 characters long",
                },
              })}
            />
          </div>
          {/* button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded mt-4 p-2 hover:bg-blue-700 transition"
          >
            Login
          </button>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
