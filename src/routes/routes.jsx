import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import FeaturedProperties from "../pages/FeaturedProperties/FeaturedProperties";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                path:'/',
                element: <FeaturedProperties/>,
                loader: () => fetch('/data/listed_properties.json'),
            },
            {
                path: '/property/:id',
                element: <PropertyDetails/>,
                loader: () => fetch('/data/listed_properties.json'),
            } 
        ]
    }
])

export default router;