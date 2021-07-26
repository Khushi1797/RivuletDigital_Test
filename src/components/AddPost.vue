<template>
  <div class="container">
    <div class="row p-4">
      <div class="col-sm-10">
        <h1>View Posts</h1>
      </div>
      <!-- <div class="col-sm-2">
        <button class="btn btn-success">Add Post</button>
      </div> -->
    </div>
    <div class="row">
      <div class="col-sm-4">
        <label style="font-size: 18px">Title</label>
        <input placeholder="Enter title" v-model="title" class="form-control" />
      </div>
      <div class="col-sm-8">
        <label style="font-size: 18px">Description</label>
        <textarea
          placeholder="Enter description"
          v-model="comment"
          class="col-sm-12 form-control"
        ></textarea>
      </div>
      <div class="col-sm-10"></div>
      <div class="col-sm-2">
        <button
          class="btn btn-success pull-right mt-3 col-sm-12"
        >
          Add Post
        </button>
      </div>
    </div>
    <hr class="p-1" />
    <div v-for="user in allPost" :key="user.id">
      <div class="row">
        <div class="col-sm-12">
          <b style="font-size: 20px">{{ user.id + " " + user.title}}</b>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <p>
            {{ user.body }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-2">Comment</div>
        <div class="col-sm-8">
          <textarea
            placeholder="Enter comment"
            class="col-sm-12 form-control"
          ></textarea>
        </div>
        <div class="col-sm-2">
          <button class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "addPost",
  data: () => {
    return {
        title: '',
        comment: '',
    };
  },
  created(){
    this.$store.dispatch("displayUsers")
  },
  computed: {
    ...mapGetters(["allPost"]),
    allPost() {
      return this.$store.getters["allPost"];
    },
  },
};
</script>
