<template>
  <div class="row p-4">
    <div class="col-sm-4"></div>
    <div class="col-sm-4 shadow p-3 mb-5 bg-light rounded">
      <h1 class="text-center">Login</h1>
      <center>
        <form @submit.prevent="login()" method="post" action="/addPost">
          <input
            type="email"
            placeholder="Username"
            v-model="email"
            required
            class="form-control col-sm-10"
          /><br /><br />
          <button type="submit" class="btn btn-success col-sm-6">Login</button>
        </form>
      </center>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data: () => {
    return {
      email: "",
    };
  },
  methods: {
    async login() {
      let payload = {
        email: this.email,
      };
      await this.$store.dispatch("fetchUsers", payload);
      if (this.$store.getters.isValildUser !== 0) {
        this.$router.push("/addPost");
      } else {
        alert("Invalid user");
      }
    },
  },
};
</script>
