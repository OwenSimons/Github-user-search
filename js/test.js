var search = new Vue({
    el: "#search",
    data() {
        return {
            Username: null,
            info: null,
            avatar: null,
        }
    },
    methods: {
        fetch: function () {
            if (this.Username.length % 1 == 0) {
                console.log("Fetching...");
                axios
                    .get("https://api.github.com/users/" + this.Username)
                    .then(response => (this.info = response, this.avatar = response.data.avatar_url))
                    .catch(error => this.info = error, this.info = null, this.avatar = null)
            }
        }
    }
})
