import { createBrowserRouter } from "react-router-dom";
import { LoginPage, FavouritesPage, RequestPage, LandingPage, NotFound, SearchPage, GameDetailsPage, UserAccountPage, RegisterPage, AboutPage, EditGamePage, LogoutPage, Forbidden, ErrorPage, ReviewPage } from "./pages";
import { App } from "./components";
import { EditGameLoader, GameDetailsLoader, RandomGameLoader, RequestReviewLoader, UserAccountLoader } from "./loaders";
import { URL_ABOUT_PAGE, URL_ACCOUNT_PAGE, URL_EDIT_GAME_DETAILS_PAGE, URL_FAVOURITES_PAGE, URL_FORBIDDEN_PAGE, URL_GAME_DETAILS_PAGE, URL_HOME, URL_LOGIN_PAGE, URL_LOGOUT_PAGE, URL_NOT_FOUND_PAGE, URL_REGISTER_PAGE, URL_REQUEST_PAGE, URL_REVIEW_PAGE, URL_SEARCH_PAGE } from "./utils";


export const router = createBrowserRouter([
	{
		path: URL_HOME,
		element: <App />,
		children: [
			{
				path: URL_ABOUT_PAGE,
				element: <AboutPage />
			},
			{
				path: `${URL_EDIT_GAME_DETAILS_PAGE}/:id`,
				element: <EditGamePage />,
				loader: EditGameLoader,
				errorElement: <ErrorPage />
			},
			{
				path: URL_FAVOURITES_PAGE,
				element: <FavouritesPage />,
			},
			{
				path: URL_FORBIDDEN_PAGE,
				element: <Forbidden />,
			},
			{
				path: `${URL_GAME_DETAILS_PAGE}/:id`,
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
				path: URL_LOGIN_PAGE,
				element: <LoginPage />
			},
			{
				path: URL_LOGOUT_PAGE,
				element: <LogoutPage />
			},
			{
				path: URL_NOT_FOUND_PAGE,
				element: <NotFound />,
			},
            {
				path: URL_REGISTER_PAGE,
				element: <RegisterPage />
			},
            {
				path: URL_REQUEST_PAGE,
				element: <RequestPage />
			},
			{
				path: `${URL_REVIEW_PAGE}/:id`,
				element: <ReviewPage />,
				loader: RequestReviewLoader,
				errorElement: <ErrorPage />
			},
			{
				path: URL_SEARCH_PAGE,
				element: <SearchPage />,
			},
			{
				path: `${URL_ACCOUNT_PAGE}/:id`,
				element: <UserAccountPage />,
				loader: UserAccountLoader,
				errorElement: <ErrorPage />
			}
		],
	},
]);