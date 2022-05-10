import Vue from 'vue';
import Vuex from 'vuex';

import ExampleStore from '../stores/ExampleStore';
import MessageStore from '../stores/MessageStore';
import AuthStore from '../stores/AuthStore';
import MainStore from '../stores/MainStore';
import TeamStore from '../stores/TeamStore';
import SocketStore from '../stores/SocketStore';
import UserStore from '../stores/UserStore';
import ScreenShareStore from '../stores/ScreenShareStore';
import UserMediaStore from '../stores/UserMediaStore';
import BackgroundRemovalStore from '../stores/BackgroundRemovalStore';
import PresenterStore from '../stores/PresenterStore';
import PaginationStore from '../stores/PaginationStore';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        ExampleStore,
        MessageStore,
        AuthStore,
        MainStore,
        TeamStore,
        SocketStore,
        UserStore,
        ScreenShareStore,
        PresenterStore,
        UserMediaStore,
        BackgroundRemovalStore,
        PaginationStore,
    },
});
