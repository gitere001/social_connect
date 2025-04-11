import { lazy } from "react";

import Landing from './pages/landing'
const Home = lazy(()=> import("./pages/Home"))

export const appRoutes = [
	{path:"/", element: Landing },
	{path:"/home", element: Home },
]