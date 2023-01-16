import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies"> Movies</Link>
      </nav>
      <br />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
