import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Layout from "../components/common/Layout/Layout";
import LandingPage from "../components/pages/LandingPage/LandingPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<LandingPage />} />
    </Route>
  )
)
