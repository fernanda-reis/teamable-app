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

    <button id="save-profile-btn" @click="handleSaveProfile">
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
      name: "Ana Smith",
      email: "anna_smith@email.com",
      interests: "coding",
      isEditMode: false,
    };
  },
  methods: {
    handleEditProfile() {
      this.isEditMode = true;
    },
    handleSaveProfile() {
      this.isEditMode = false;
    },
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
