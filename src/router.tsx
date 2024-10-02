import { createBrowserRouter } from "react-router-dom";
import { LoginPage, FavouritesPage, RequestPage, LandingPage, NotFound, SearchPage, GameDetailsPage, UserAccountPage, RegisterPage, AboutPage, EditGamePage } from "./pages";
import { App } from "./components";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/about",
				element: <AboutPage />
			},
			{
				path: "/editgame/:id",
				element: <EditGamePage />
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
				index: true,
				element: <LandingPage />
			},
            {
				path: "/login",
				element: <LoginPage />
			},
			{
				path: "*",
				element: <NotFound />,
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
				path: "/games",
				element: <SearchPage />,
			},
			{
				path: "/account/:id",
				element: <UserAccountPage />
			}
		],
	},
]);