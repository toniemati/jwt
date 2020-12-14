<template>
    <div id="addArticle">
        <div class="row">
            <div class="col-12 text-center">
                <h1>Edytuj Artykuł</h1>
            </div>
        </div>
        <div class="row">
            <form
                class="col-sm-12 col-md-6 mx-auto col-lg-3"
                @submit.prevent="saveArticle"
            >
                <div class="form-group">
                    <label for="title">Tytuł:</label>
                    <input
                        v-model="article.title"
                        id="title"
                        type="text"
                        class="form-control"
                    />
                </div>
                <div class="form-group">
                    <label for="user_id">Użytkownik:</label>
                    <select
                        class="form-control"
                        v-model="article.user_id"
                        id="user_id"
                    >
                        <option
                            v-for="(user, i) in users"
                            :key="i"
                            :value="user.id"
                        >
                            {{ user.name }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="category_id">Kategoria:</label>
                    <select
                        class="form-control"
                        v-model="article.category_id"
                        id="category_id"
                    >
                        <option
                            v-for="(category, i) in categories"
                            :key="i"
                            :value="category.id"
                        >
                            {{ category.name }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="body">Body:</label>
                    <textarea
                        v-model="article.body"
                        id="body"
                        type="text"
                        class="form-control"
                        rows="5"
                    >
                    </textarea>
                </div>
                <button class="btn btn-warning">Edytuj</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EditArticle",

        data() {
            return {
                article: {},
                categories: [],
                users: []
            };
        },
        methods: {
            saveArticle: function() {
                axios
                    .put("/api/articles/" + this.article.id, this.article)
                    .then(res => {
                        this.$router.push({
                            name: "articles",
                            params: {
                                message: {
                                    type: "alert-warning",
                                    text: res.data.message
                                }
                            }
                        });
                    })
                    .catch(err => console.log(err));
            },
            getArticle: function(id) {
                axios
                    .get("/api/articles/" + id)
                    .then(res => (this.article = res.data))
                    .catch(err => console.log(err));
            },
            getCategories: function() {
                axios
                    .get("/api/categories")
                    .then(res => (this.categories = res.data))
                    .catch(err => console.log(err));
            },
            getUsers: function() {
                axios
                    .get("/api/users")
                    .then(res => {
                        this.users = res.data;
                    })
                    .catch(err => console.log(err));
            }
        },
        created() {
            this.getArticle(this.$route.params.id);
            this.getCategories();
            this.getUsers();
        }
    };
</script>

<style scoped>
textarea {
    resize: none;
}
</style>