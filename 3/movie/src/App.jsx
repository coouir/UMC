// App.jsx
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';

import HomePage from "./pages/home.jsx";
import SignInPage from './pages/signin.jsx';
import SignOutPage from './pages/signout.jsx';
import SearchPage from './pages/search.jsx';
import MoviesPage from "./pages/movies.jsx";
import PopularMoviesPage from "./pages/PopularMoviesPage.jsx"; // 새로운 인기 있는 영화 페이지
import NotFound from "./pages/not-found.jsx";
import RootLayout from "./layout/root-layout.jsx";
import NowPlayingPage from './pages/NowPlayingPage.jsx';
import TopRatedMoviesPage from './pages/TopRatedMoviesPage.jsx';
import UpcomingMoviesPage from './pages/UpcomingMoviesPage.jsx';


// 전역 스타일 추가
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Arial', sans-serif;
    background-color: #000;
    color: white;
  }
`;

// 라우터 설정
const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'signin',
                element: <SignInPage />
            },
            {
                path: 'signout',
                element: <SignOutPage />
            },
            {
                path: 'search',
                element: <SearchPage />
            },
            {
                path: 'movies',
                element: <MoviesPage />,
            },
            {
                path: 'movies/now-playing', // NowPlaying 경로 추가
                element: <NowPlayingPage />
            },
            {
                path: 'movies/popular', // 새로운 인기 있는 영화 경로 추가
                element: <PopularMoviesPage />,
            },
            {
                path: 'movies/top-rated', // 높은 평가를 받은 영화 페이지 추가
                element: <TopRatedMoviesPage />,
            },
            {
                path: 'movies/up-coming', // 개봉 예정인 영화 페이지 추가
                element: <UpcomingMoviesPage />,
            },
        ]
    }
]);

function App() {
    return (
        <>
            <GlobalStyle /> {/* 전역 스타일 적용 */}
            <RouterProvider router={router} />
        </>
    );
}

export default App;
