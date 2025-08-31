import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout('./components/layouts/default.tsx', [
        layout('./components/layouts/create-fab.tsx', [
            index("routes/home.tsx"),
            route('/confluences', "routes/confluences.tsx", [
                route('liked', "routes/confluences/liked.tsx"),
                route('created', "routes/confluences/created.tsx"),
            ]),
            route('/lessons', "routes/lessons.tsx", [
                route('progress', "routes/lessons/progress.tsx"),
                route('done', "routes/lessons/done.tsx"),
                route('created', "routes/lessons/created.tsx"),
            ]),
            route('/notifications', "routes/notifications.tsx"),
        ])
    ])
] satisfies RouteConfig;
