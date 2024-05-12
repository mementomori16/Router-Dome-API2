import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import User from "../pages/User/User";
import NavBarWrapper from "../layouts/NavBarWrapper";
import UserLayout from "../layouts/UserLayout";
import DogBreeds from "../pages/DogBreeds/DogBreeds";
import DogCard from "../pages/DogCard/DogCard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBarWrapper />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "dogbreeds", element: <DogBreeds /> },
      { path: "dogcard", element: <DogCard /> },
      { path: "user/:id", element: <User /> },
      // { path: "*", element: <div>Not found</div> },
    ],
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      { path: "login", element: <p>login</p> },
      { path: "register", element: <p>register</p> },
    ],
  },
]);

export default router;
