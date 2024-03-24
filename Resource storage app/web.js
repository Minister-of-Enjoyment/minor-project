// Show and Hide Modal
let createButton = document.getElementById("button");
let modalContainer = document.getElementById("modalContainer");
let closeModal = document.getElementById("closeIcon");

createButton.addEventListener("click", ShowModal);

function ShowModal() {
  if (modalContainer.classList.contains("modalContainer")) {
    modalContainer.classList.remove("modalContainer");
    modalContainer.classList.add("modalContainerVisible");
  }
}
closeModal.addEventListener("click", hideModal);
function hideModal() {
  if (modalContainer.classList.contains("modalContainerVisible")) {
    modalContainer.classList.remove("modalContainerVisible");
    modalContainer.classList.add("modalContainer");
  }
}

// Form submission
let modalForm = document.getElementById("form");
let nameOfWebsite = document.getElementById("nameOfWebsite");
let linkOfWebsite = document.getElementById("linkOfWebsite");
let descriptionOfWebsite = document.getElementById("descriptionOfWebsite");
let resourceArray = [];

modalForm.addEventListener("submit", submitForm);
function submitForm(event) {
  event.preventDefault();
  let websiteName = nameOfWebsite.value;
  let websiteLink = linkOfWebsite.value;
  let websiteDescription = descriptionOfWebsite.value;

  const resourceObject = {
    nameForWebsite: websiteName,
    linkForWebsite: websiteLink,
    descriptionForWebsite: websiteDescription,
    timeStamp: new Date().getTime(),
  };
  resourceArray.unshift(resourceObject);
  localStorage.setItem("resources", JSON.stringify(resourceArray));
  modalForm.reset();
  hideModal();
  fetchResources();
  renderResource();
}

//Function to fetch resources from the local storage

function fetchResources() {
  if (localStorage.getItem("resources")) {
    resourceArray = JSON.parse(localStorage.getItem("resources"));
  }
}
fetchResources();

// Function to render the collected resources to the UI

let resourceSection = document.getElementById("resourceSection");

function renderResource() {
  resourceSection.innerHTML = "";
  resourceArray.forEach((resourceItem, index) => {
    let websiteName = resourceItem.nameForWebsite;
    let websiteLink = resourceItem.linkForWebsite;
    let websiteDescription = resourceItem.descriptionForWebsite;

    let resourceDiv = document.createElement("div");
    resourceDiv.classList.add("resource");
    resourceDiv.setAttribute("id", `${index}`);

    let nameAndIconDiv = document.createElement("div");
    nameAndIconDiv.classList.add("nameAndIcon");

    let websiteNameText = document.createElement("a");
    websiteNameText.setAttribute("href", `${websiteLink}`);
    websiteNameText.textContent = websiteName;
    websiteNameText.setAttribute("target", "_blank");

    let trashIcon = document.createElement("i");
    trashIcon.classList.add("fa", "fa-trash");
    trashIcon.setAttribute("id", "deleteIcon");
    trashIcon.setAttribute("data-action", "delete");

    let descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("descriptionContainer");

    let paragraph = document.createElement("p");
    paragraph.textContent = websiteDescription;

    nameAndIconDiv.append(websiteNameText, trashIcon);
    descriptionDiv.append(paragraph);
    resourceDiv.append(nameAndIconDiv, descriptionDiv);
    resourceSection.append(resourceDiv);
  });
}
renderResource();

// Target the delete icon to delete resource item
resourceSection.addEventListener("click", (event) => {
  let clickTarget = event.target;
  let resourceItem = clickTarget.parentElement.parentElement;
  if (resourceItem.className !== "resource") return;
  let resourceId = Number(resourceItem.id);
  let dataAction = clickTarget.dataset.action;
  if (dataAction === "delete") {
    deleteResource(resourceId);
  }
});

// Function to delete resource items in the resource section
function deleteResource(ResID) {
  resourceArray = resourceArray.filter((resource, index) => {
    return ResID !== index;
  });
  renderResource();
}
