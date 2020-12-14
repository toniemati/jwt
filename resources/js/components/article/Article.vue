<template>
    <div id="article">
        <div class="row">
            <div
                class="col-12 d-flex justify-content-center align-items-center"
            >
                <h1>Artykuły</h1>
                <router-link class="btn btn-success mx-3" to="article/add">
                    Dodaj
                </router-link>
            </div>
        </div>
        <div v-if="message" class="row">
            <div class="col-12 mx-auto text-center alert" :class="message.type">
                {{ message.text }}
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <table class="table table-hover table-expanded text-center">
                    <thead class="thead-dark">
                        <tr>
                            <th>Tytuł</th>
                            <th>Użytkownik</th>
                            <th>Kategoria</th>
                            <th>Edytuj</th>
                            <th>Usuń</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(article, i) in articles" :key="i">
                            <td>{{ article.title }}</td>
                            <td>{{ article.user.name }}</td>
                            <td>{{ article.category.name }}</td>
                            <td>
                                <router-link
                                    class="btn btn-info"
                                    :to="`/article/` + article.id"
                                >
                                    Edit
                                </router-link>
                            </td>
                            <td>
                                <button
                                    class="btn btn-danger"
                                    @click="deleteArticle(article.id)"
                                >
                                    Usuń
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Category",

        data() {
            return {
                articles: null,
                message: null
            };
        },

        methods: {
            getArticles: function() {
                axios
                    .get("/api/articles")
                    .then(res => (this.articles = res.data))
                    .catch(err => console.log(err));
            },

            deleteArticle: function(id) {
                axios
                    .delete("/api/articles/" + id)
                    .then(res => {
                        this.message = {
                            type: "alert-danger",
                            text: res.data.message
                        };
                    })
                    .catch(err => console.log(err));

                this.getArticles();
            },

            getMessage: function() {
                this.message = this.$route.params.message;
            }
        },

        created() {
            this.getArticles();
            this.getMessage();
        }
    };
</script>

<style>
</style>