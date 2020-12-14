<template>
    <div id="addCategory">
        <div class="row">
            <div class="col-12 text-center">
                <h1>Dodaj kategorię</h1>
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
                <button class="btn btn-success">Dodaj</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddCategory",

        data() {
            return {
                category: {}
            };
        },

        methods: {
            saveCategory: function() {
                axios
                    .post("/api/categories", this.category)
                    .then(res => {
                        this.$router.push({
                            name: "categories",
                            params: {
                                message: {
                                    type: "alert-success",
                                    text: res.data.message
                                }
                            }
                        });
                    })
                    .catch(err => console.log(err));
            }
        }
    };
</script>

<style>
</style>