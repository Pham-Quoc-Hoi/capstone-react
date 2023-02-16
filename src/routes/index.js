import { Route } from 'react-router-dom';
import { lazy } from "react";

const routes = [
    {
        path: "",
        element: lazy(() => import("./../pages/HomeTemplates")),
        nested: [
            {
                path: "",
                element: lazy(() => import("./../pages/HomeTemplates/HomePages")),
            },
            {
                path: "about",
                element: lazy(() => import("./../pages/HomeTemplates/AboutPages"))
            },
            // {
            //     path: "detail/{id}",
            //     element: lazy(() => import("./../pages/HomeTemplates/ListMoviePages"))
            // },
            {
                path: "ticket-room/:id",
                element: lazy(() => import("./../pages/HomeTemplates/TicketRoom"))
            }
        ]
    },
    {
        path: "register",
        element: lazy(() => import("./../pages/HomeTemplates/Register"))
    },
    {
        path: "login",
        element: lazy(() => import("./../pages/HomeTemplates/Login"))
    },
    {
        path: "admin/films",
        element: lazy(() => import("./../pages/AdminTemplates")),
        nested: [
            {
                path: "new-film",
                element: lazy(() => import("./../pages/AdminTemplates/AddFilm"))
            },
            {
                path: "adduser",
                element: lazy(() => import("./../pages/AdminTemplates/AddUsers"))
            },
            {
                path: "show-time",
                element: lazy(() => import("./../pages/AdminTemplates/Showtime"))
            }
        ],
    },
]

const renderRoutes = () => {
    return routes.map((route) => {
        if (route.nested) {
            //Những page có nested
            return <Route key={route.path} path={route.path} element={<route.element />}>
                {route.nested.map((item) => {
                    return <Route key={item.path} path={item.path} element={<item.element />} />
                })}
            </Route >;
        } else {
            //Những page không có nested
            return <Route key={route.path} path={route.path} element={<route.element />} />
        }
    })
}

export default renderRoutes;