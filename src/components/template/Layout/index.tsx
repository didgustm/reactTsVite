import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '@comp/template/Header';
import Aside from '@comp/template/Aside';
import Spinner from '../../common/Spinner';

function Layout() {
    return (
        <>
            <aside className="aside">
                <Header />
                <Aside />
            </aside>
            <Suspense fallback={<Spinner />}>
                <div id="app">
                    <Outlet />
                </div>
            </Suspense>
        </>
    );
}

export default Layout;
