import { createBrowserRouter } from "react-router-dom";
import { LoginPage, FavouritesPage, RequestPage, LandingPage, NotFound, SearchPage, GameDetailsPage, UserAccountPage, RegisterPage, AboutPage, EditGamePage, LogoutPage, Forbidden } from "./pages";
import { App } from "./components";
import { EditGameLoader } from "./loaders/EditGameLoader";
import { UserAccountLoader } from "./loaders/UserAccountLoader";

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
				element: <EditGamePage />,
				loader: EditGameLoader
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
				path: "/logout",
				element: <LogoutPage />
			},
			{
				path: "*",
				element: <NotFound />,
			},
			{
				path: "/403",
				element: <Forbidden />,
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
				element: <UserAccountPage />,
				loader: UserAccountLoader
			}
		],
	},
]);