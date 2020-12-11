import routes from './routes';
export default {
    install (Vue, options) {
        options.router.addRoutes(routes);
    }
}
