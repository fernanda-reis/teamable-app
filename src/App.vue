<template>
  <div v-show="!isEditMode">
    <h1>User Profile</h1>
    <img id="profile-img" :src="image" alt="Profile image" />

    <span>Name:</span> <b id="name">{{ name }}</b>
    <hr />

    <span>Email:</span> <b id="email">{{ email }}</b>
    <hr />

    <span>Interests:</span> <b id="interests">{{ interests }}</b>
    <hr />

    <button id="edit-profile-btn" @click="handleEditProfile">
      Edit Profile
    </button>
  </div>

  <div v-show="isEditMode">
    <h1>User Profile</h1>
    <img id="profile-img" :src="image" alt="Profile image" />

    <span>Name:</span> <input id="input-name" type="text" v-model="name" />
    <hr />

    <span>Email:</span> <input id="input-email" type="email" v-model="email" />
    <hr />

    <span>Interests:</span>
    <input id="input-interests" type="text" v-model="interests" />
    <hr />

    <button id="save-profile-btn" @click="handleUpdateProfile">
      Save Profile
    </button>
  </div>
</template>

<script>
import profileImage from "./profile.jpeg";
export default {
  name: "App",
  data() {
    return {
      image: profileImage,
      name: "",
      email: "",
      interests: "",
      isEditMode: false,
    };
  },
  //executed automatically when the component is created
  async created(){
    const userData = await this.fetchUserProfile();
    this.name = userData.name;
    this.email = userData.email;
    this.interests = userData.interests;
  },
  methods: {
    handleEditProfile() {
      this.isEditMode = true;
    },
    async handleUpdateProfile(){
      const payload = {
        name: this.name,
        email: this.email,
        interests: this.interests
      }
      const resJson = await this.updateUserProfile(payload);
      console.log(resJson)
      this.isEditMode = false;
    },
    async fetchUserProfile() {
      const res = await fetch('get-profile')
      return await res.json()
    },
    async updateUserProfile(payload){
      const res = await fetch('update-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      return await res.json();
    }
  },
};
</script>

<style>
div {
  width: 80%;
  margin: 40px auto;
}

#profile-img {
  width: 320px;
  height: 270px;
  display: block;
  margin-bottom: 40px;
}

hr {
  width: 400px;
  margin: 25px 0;
}

button {
  height: 45px;
  width: 120px;
  border-radius: 5px;
}

button:hover {
  cursor: pointer;
}

input {
  width: 200px;
  font-size: 15px;
  padding: 10px;
}
</style>
