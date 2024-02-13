let storyForm = document.getElementById("form");
let storyInput = document.getElementById("story");
let button = document.getElementById("button");
let storyText = document.getElementById("story-text");
let storyContainer = document.getElementById("story-container");

let stories = [];
let fetchedStories = [];

function showStoryOnUI() {
  storyContainer.innerHTML = "";
  fetchedStories.forEach(function (stories) {
    const listItem = document.createElement("div");
    listItem.classList.add("listDiv");
    listItem.textContent = stories.story;
    // let userStory = stories.story;
    storyContainer.appendChild(listItem);
    // storyText.textContent = userStory;
  });
}

storyForm.addEventListener("submit", storySubmission);
function storySubmission(event) {
  event.preventDefault();
  let storyFromUser = storyInput.value;
  const storiesFromUsers = {
    story: storyFromUser,
  };
  stories.push(storiesFromUsers);
  localStorage.setItem("stories", JSON.stringify(stories));
  storyForm.reset();
  fetchStories();
}

function fetchStories() {
  if (localStorage.getItem("stories")) {
    fetchedStories = JSON.parse(localStorage.getItem("stories"));
  }
  showStoryOnUI();
}
