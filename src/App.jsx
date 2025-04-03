import data from "./jobs.json";

import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Jobs from "./components/Jobs";
import Home from "./pages/Home";
import Job from "./components/Job";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="jobs" element={<Jobs data={data} />} />
        <Route path="jobs/:title" element={<Job data={data} />} />
      </Route>,
    ),
    {
      basename: "/pesty/",
    },
  );

  console.log(data);
  return <RouterProvider router={router} />;
}

export default App;
