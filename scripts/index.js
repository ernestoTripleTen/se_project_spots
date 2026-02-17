const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input",
);

const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input",
);
const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const imageLinkInput = newPostForm.querySelector("#image-link-input");

const captionInput = newPostForm.querySelector("#profile-description-input");

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileModal.classList.add("modal_is-opened");

  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

newPostForm.addEventListener("submit", function (evt) {
  evt.preventDefault(); // Prevents the page from refreshing

  // Log the values to console
  console.log("Image Link:", imageLinkInput.value);
  console.log("Caption:", captionInput.value);

  // Close the modal
  newPostModal.classList.remove("modal_is-opened");
});

editProfileForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
});
