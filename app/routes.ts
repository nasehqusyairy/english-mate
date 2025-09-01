import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout('./components/layouts/default.tsx', [
        layout('./components/layouts/create-fab.tsx', [
            index("routes/home.tsx"),
            route('/meetings', "routes/meetings.tsx", [
                route('registered', "routes/meetings/registered.tsx"),
                route('created', "routes/meetings/created.tsx"),
            ]),
            route('/lessons', "routes/lessons.tsx", [
                route('progress', "routes/lessons/progress.tsx"),
                route('done', "routes/lessons/done.tsx"),
                route('created', "routes/lessons/created.tsx"),
            ]),
            route('/notifications', "routes/notifications.tsx"),
            route('/profile', "routes/profile.tsx"),
        ])
    ])
] satisfies RouteConfig;
