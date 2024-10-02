import { createBrowserRouter } from "react-router-dom";
import { LoginPage, FavouritesPage, RequestPage, LandingPage, NotFound, SearchPage, GameDetailsPage, UserAccountPage, RegisterPage, AboutPage } from "./pages";
import { App } from "./components";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <LandingPage />
			},
			{
				path: "/games",
				element: <SearchPage />,
			},
			{
				path: "/favourites",
				element: <FavouritesPage />,
			},
			{
				path: "/gamedetails/:id",
				element: <GameDetailsPage />
			},
			{
				path: "/account/:id",
				element: <UserAccountPage />
			},
            {
				path: "/login",
				element: <LoginPage />
			},
            {
				path: "/register",
				element: <RegisterPage />
			},
            {
				path: "/request",
				element: <RequestPage />
			},
            {
				path: "/about",
				element: <AboutPage />
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);