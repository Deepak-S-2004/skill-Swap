import { useForm } from "react-hook-form";
import Error from "./errorpage";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function signup() {
  // post signup data

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const postData = async (data) => {
    const adddata = {
      name: data.Name,
      email: data.Email,
      phone: data.Phone,
      password: data.Password,
      confirmpassword: data.ConfirmPassword,
    };
    await axios.post(
      "https://6ac9d3343115bcc958200bc3.mockapi.io/version1/skills",  
      adddata,
    );
    navigate("/Login");
    try {
      console.log(adddata);
    } catch (error) {}
  };
  return (
    <>
      <div className="flex p-6 justify-center items-center">
        <div className="w-full max-w-md m-3 bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold text-center text-gray-900">
            Sign up
          </h1>

          {/* input name */}

          <form action="" onSubmit={handleSubmit(postData)}>
            <div className="flex flex-col gap-1 mt-4">
              <label htmlFor="">Name:</label>
              {errors.Name && <Error message={errors.Name.message} />}
              <input
                type="text"
                name="Name"
                id=""
                placeholder="Enter Your Name"
                className="border rounded p-2"
                {...register("Name", {
                  required: {
                    value: true,
                    message: "Name is Required!",
                  },
                })}
              />
            </div>

            {/* input email */}

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

            {/* input phone */}

            <div className="flex flex-col gap-1 mt-4">
              <label htmlFor="">Phone:</label>
              {errors.Phone && <Error message={errors.Phone.message} />}
              <input
                type="tel"
                name="Phone"
                id=""
                placeholder="Enter Your Phone Number"
                className="border rounded p-2"
                {...register("Phone", {
                  required: {
                    value: true,
                    message: "Phone is Required!",
                  },
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid phone number with 10 digits!",
                  },
                })}
              />
            </div>

            {/* input password */}

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

            {/* input confirm password */}

            <div className="flex flex-col gap-1 mt-4">
              <label htmlFor="">Confirm Password:</label>
              {errors.ConfirmPassword && (
                <Error message={errors.ConfirmPassword.message} />
              )}

              <input
                type="password"
                name="ConfirmPassword"
                id=""
                placeholder="Confirm Password"
                className="border rounded p-2"
                {...register("ConfirmPassword", {
                  required: {
                    value: true,
                    message: "Confirm password is Required!",
                  },
                  validate: (value) =>
                    value === getValues("Password") ||
                    "password and confirm password must be same",
                })}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded mt-4 p-2 hover:bg-blue-700 transition"
              >
                Signup
              </button>
              <p className="text-center mt-4">
                alredy have an account?{" "}
                <Link to="/" className="text-blue-600 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default signup;
