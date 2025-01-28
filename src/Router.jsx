import { Route, createBrowserRouter, createRoutesFromElements } from "react-router";
import { RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import ResumePage from "./Pages/ResumePage"
import App from "./App"


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} >
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
        </Route>
    )
)
export default function Router() {

    return (
        <RouterProvider router={router} />
    )
}
