<template>
    <div id="editCategory">
        <div class="row">
            <div class="col-12 text-center">
                <h1>Edytuj kategorię</h1>
            </div>
        </div>
        <div class="row">
            <form
                class="col-sm-12 col-md-6 mx-auto col-lg-3"
                @submit.prevent="saveCategory"
            >
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input
                        v-model="category.name"
                        id="name"
                        type="text"
                        class="form-control"
                    />
                </div>
                <button class="btn btn-warning">Edytuj</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EditCategory",

        data() {
            return {
                category: {}
            };
        },

        methods: {
            getCategory: function(id) {
                axios
                    .get("/api/categories/" + id)
                    .then(res => (this.category = res.data))
                    .catch(err => console.log(err));
            },

            saveCategory: function() {
                axios
                    .put("/api/categories/" + this.category.id, this.category)
                    .then(res => {
                        this.$router.push({
                            name: "categories",
                            params: {
                                message: {
                                    type: "alert-warning",
                                    text: res.data.message
                                }
                            }
                        });
                    })
                    .catch(err => console.log(err));
            }
        },

        created() {
            this.getCategory(this.$route.params.id);
        }
    };
</script>

<style>
</style>