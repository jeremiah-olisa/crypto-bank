import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const csrf = window.document
    .querySelector('meta[name="csrf-token"]')
    ?.getAttribute('content');

if (csrf) window.axios.defaults.headers.common['X-CSRF-TOKEN'] = csrf;
