var search = new Vue({
    el: "#search",
    data() {
        return {
            Username: null,
            info: null,
            avatar: null,
            html_url: null,
            name: null,
            location: null,
            company: null,
            public_repos: null,
            public_gists: null,
            followers: null,
            following: null,
        }
    },
    methods: {
        fetch: function () {
            if (this.Username.length % 1 == 0) {
                console.log("Fetching...");
                axios
                    .get("https://api.github.com/users/" + this.Username)

                    .then(response => (this.info = response,
                        this.avatar = response.data.avatar_url,
                        this.html_url = response.data.html_url,
                        this.name = response.data.name,
                        this.location = response.data.location,
                        this.company = response.data.company,
                        this.public_repos = response.data.public_repos,
                        this.public_gists = response.data.public_gists,
                        this.followers = response.data.followers,
                        this.following = response.data.following))

                    .catch(error => this.info = error,
                        this.info = null,
                        this.avatar = null,
                        this.html_url = null,
                        this.name = null,
                        this.location = null,
                        this.company = null,
                        this.public_repos = null,
                        this.public_gists = null,
                        this.followers = null,
                        this.following = null,)
            }
        }
    }
})
