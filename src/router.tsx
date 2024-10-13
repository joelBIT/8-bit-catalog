import { createBrowserRouter } from "react-router-dom";
import { LoginPage, FavouritesPage, RequestPage, LandingPage, NotFound, SearchPage, GameDetailsPage, UserAccountPage, RegisterPage, AboutPage, EditGamePage, LogoutPage, Forbidden, ErrorPage } from "./pages";
import { App } from "./components";
import { EditGameLoader, GameDetailsLoader, RandomGameLoader, UserAccountLoader } from "./loaders";


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
				loader: EditGameLoader,
				errorElement: <ErrorPage />
			},
			{
				path: "/favourites",
				element: <FavouritesPage />,
			},
			{
				path: "/403",
				element: <Forbidden />,
			},
			{
				path: "/gamedetails/:id",
				element: <GameDetailsPage />,
				loader: GameDetailsLoader,
				errorElement: <ErrorPage />
			},
			{
				index: true,
				element: <LandingPage />,
				loader: RandomGameLoader,
				errorElement: <ErrorPage />
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
				loader: UserAccountLoader,
				errorElement: <ErrorPage />
			}
		],
	},
]);