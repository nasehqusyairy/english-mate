import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout('./components/layouts/theme.tsx', [
        layout('./components/layouts/default.tsx', [
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
            route('/profile', "routes/profile.tsx"),
            route('/leaderboard', "routes/leaderboard.tsx"),
        ]),

        layout('./components/layouts/modal.tsx', [

            route('/tickets', "routes/tickets.tsx"),
            route('/view-profile', "routes/view-profile.tsx"),

            route('/notifications', "routes/notifications.tsx", [
                route('missions', "routes/notifications/missions.tsx"),
            ]),

            route('/meetings/new', "routes/meetings/new.tsx"),
            route('/meetings/preview', "routes/meetings/preview.tsx"),
            route('/meetings/filter', "routes/meetings/filter.tsx"),

            route('/lessons/new', "routes/lessons/new.tsx"),
            route('/lessons/:id', "routes/lessons/preview.tsx"),
            route('/lessons/filter', "routes/lessons/filter.tsx"),

            route('/profile/help', './routes/profile/help.tsx'),
            route('/profile/feedback', './routes/profile/feedback.tsx'),
            route('/profile/edit', './routes/profile/edit.tsx'),
            route('/profile/change-password', './routes/profile/change-password.tsx'),
            route('/profile/transaction-history', './routes/profile/transaction-history.tsx'),
            route('/profile/members-benefits', './routes/profile/members-benefits.tsx'),
        ]),
    ])

] satisfies RouteConfig;
