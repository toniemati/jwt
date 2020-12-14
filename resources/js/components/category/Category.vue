<template>
    <div id="category">
        <div class="row">
            <div
                class="col-12 d-flex justify-content-center align-items-center"
            >
                <h1>Kategorie</h1>
                <router-link class="btn btn-success mx-3" to="category/add">
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
                            <th>ID</th>
                            <th>Nazwa</th>
                            <th>Edytuj</th>
                            <th>Usuń</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(category, i) in categories" :key="i">
                            <td>{{ category.id }}</td>
                            <td>{{ category.name }}</td>
                            <td>
                                <router-link
                                    class="btn btn-info"
                                    :to="`/category/` + category.id"
                                >
                                    Edit
                                </router-link>
                            </td>
                            <td>
                                <button
                                    class="btn btn-danger"
                                    @click="deleteCategory(category.id)"
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
                categories: null,
                message: null
            };
        },

        methods: {
            getCategories: function() {
                axios
                    .get("/api/categories")
                    .then(res => (this.categories = res.data))
                    .catch(err => console.log(err));
            },

            deleteCategory: function(id) {
                axios
                    .delete("/api/categories/" + id)
                    .then(res => {
                        this.message = {
                            type: "alert-danger",
                            text: res.data.message
                        };
                    })
                    .catch(err => console.log(err));

                this.getCategories();
            },

            getMessage: function() {
                this.message = this.$route.params.message;
            }
        },

        created() {
            this.getCategories();
            this.getMessage();
        }
    };
</script>

<style>
</style>