import React, { Suspense } from 'react';
import { Routes as ReactRoutes, Route, BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Layout from './Layout'
import Loader from './UI/Loader';

const Homepage = React.lazy(() => import('../pages/Homepage'))
const Moviespage = React.lazy(() => import('../pages/Moviespage'))
const Filmpage = React.lazy(() => import('../pages/Filmpage'))

export const routes = {
  home: { url: '/', title: 'Home' },
  movies: { url: '/movies/', title: 'Movies' },
  film: { url: '/movies/:id', title: null },
}

export function filterRoutes(titles) {
  return Object.values(routes).filter(route => titles.includes(route.title))
}

export function getFilmPath(filmId) {
  return routes.movies.url + filmId
}

export function Routes() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense
          fallback={
            <div style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Loader />
            </div>
          }
        >
          <ReactRoutes>
            <Route path='/' element={<Layout />}>
              <Route index element={<ErrorBoundary><Homepage /></ErrorBoundary>} />
              <Route path={routes.movies.url} element={<ErrorBoundary><Moviespage /></ErrorBoundary>} />
              <Route path={routes.film.url} element={<ErrorBoundary><Filmpage /></ErrorBoundary>} />
            </Route>
          </ReactRoutes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

