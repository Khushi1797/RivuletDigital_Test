import axios from 'axios';
// import Vue from 'vue'
const state = {
    allUsers: [],
    isValildUser: 0,
    allPost: [],
    // editData: [],
};

const getters = {
    postList: state => state.allUsers,
    isValildUser: state => state.isValildUser,
    allPost: state => state.allPost,
};

const actions = {
    async fetchUsers(state, payload) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users?email=${payload.email}`, payload);
        state.commit('SET_USERS', response)
    },

    async displayUsers(state) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log("response: ", response);
        state.commit('DISPLAY_POSTS', response)
    },

    // async setEditData({ commit }, payload) {
    //     // const response = await axios.put(`http://localhost:3000/users/${payload.id}`, payload);
    //     // console.log("response: ", response);
    //     commit("SET_EDIT_DATA", payload)
    // },



    // async addUsers({ commit }, payload) {
    //     const response = await axios.post("http://localhost:3000/users", payload);
    //     commit('addUsers', response.data);
    // },

};

const mutations = {

    SET_USERS: (state, data) => {
        state.allUsers = data
        state.isValildUser = data.data.length
    },

    DISPLAY_POSTS: (state, data) => {
        console.log("data: ", data)
        if(data.status == 200)
        {
            state.allPost = data.data
        }
        else{
            alert("something went wrong!!")
        }
        
    }

    // addUsers: (state, data) => {
    //     state.users.push(data);
    // },

}

export default {
    state,
    getters,
    actions,
    mutations
}