import routes from './routes';
import auth from './store';
import { mapGetters } from 'vuex';

export default {
    install (Vue, options) {
        options.router.addRoutes(routes);
        options.store.registerModule('auth', auth);
        Vue.mixin({
            computed: {
                ...mapGetters('auth', [
                    '$user'
                ])
            }
        })

    }
}
