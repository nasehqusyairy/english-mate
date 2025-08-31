import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout('./components/layouts/default.tsx', [
        index("routes/home.tsx"),
        route('/confluences', "routes/confluences.tsx", [
            route('joined', "routes/confluences/joined.tsx"),
            route('created', "routes/confluences/created.tsx"),
        ]),
        // route('/lessons', "routes/lessons.tsx"),
    ])
] satisfies RouteConfig;
