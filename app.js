function handleEditProfile() {
  document.getElementById("container-edit").style.display = "block";
  document.getElementById("container-view").style.display = "none";

  const currentName = document.getElementById("name").textContent;
  const currentEmail = document.getElementById("email").textContent;
  const currentInterests = document.getElementById("interests").textContent;

  document.getElementById("input-name").value = currentName;
  document.getElementById("input-email").value = currentEmail;
  document.getElementById("input-interests").value = currentInterests;
}

function handleSaveProfile() {
  document.getElementById("container-view").style.display = "block";
  document.getElementById("container-edit").style.display = "none";

  const newName = document.getElementById("input-name").value;
  const newEmail = document.getElementById("input-email").value;
  const newInterests = document.getElementById("input-interests").value;

  document.getElementById("name").textContent = newName;
  document.getElementById("email").textContent = newEmail;
  document.getElementById("interests").textContent = newInterests;
}
