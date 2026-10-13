import Signup from "../pages/signup";
import Login from "../pages/login";
import Home from "../pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./components/browse";
import Dashboard from "./components/dashboard";
import AddSkill from "./components/addSkill";
import Showskill from "./components/skill";
import Profile from "./components/profile";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/Browse',
    element:<Browse/>
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  },
  {
    path:'/addskill',
    element:<AddSkill/>
  },
  {
    path:'/skill/:id',
    element:<Showskill/>
  },
   {
    path:'/profile/:id',
    element:<Profile/>
  }
],{
  basename:"/skill-Swap/"
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;