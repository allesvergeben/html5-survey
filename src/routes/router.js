import Vue from 'vue';
import Router from "vue-router";
import Survey from '../components/survey.vue';
import question1 from './question-1';
import question2 from './question-2';
import question3 from './question-3';
import question4 from './question-4';


Vue.use(Router);

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Survey},
        { path: '/question1', name: 'question1', component: question1},
        { path: '/question2', name: 'question2' , component: question2},
        { path: '/question3', name: 'question3' , component: question3},
        { path: '/question4', name: 'question4' , component: question4}
    ]
});
