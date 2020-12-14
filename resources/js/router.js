import Vue from 'vue';
import VueRouter from 'vue-router';

//* Categories
import Category from './components/category/Category';
import AddCategory from './components/category/AddCategory';
import EditCategory from './components/category/EditCategory';

//* Articles
import Article from './components/article/Article';
import AddArticle from './components/article/AddArticle';
import EditArticle from './components/article/EditArticle';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/categories', name: "categories", component: Category },
        { path: '/category/add', component: AddCategory },
        { path: '/category/:id', component: EditCategory },
        { path: '/articles', name: 'articles', component: Article },
        { path: '/article/add', component: AddArticle },
        { path: '/article/:id', component: EditArticle },

    ]
});