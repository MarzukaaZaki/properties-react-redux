import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        loader: () => fetch('/data/listed_properties.json'),
    }
])

export default router;