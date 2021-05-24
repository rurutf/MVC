var Router = {
    handle(route) {
        var routeName = route + 'Route';

        Controller[routeName]();
    }
};
