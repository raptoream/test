import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import nodemailer from 'nodemailer';
import App from './components/App.vue';

Vue.use(BootstrapVue);
Vue.use(nodemailer);
new Vue({
    nodemailer,
    BootstrapVue,
    render: h=> h(App)
}).$mount('#app'); 