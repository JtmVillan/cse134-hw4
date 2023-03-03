import { showDialog, closeDialog } from "./customdialog.js";

let add_post = window.document.getElementById("add-post"); // Button to add new post
add_post.insertAdjacentHTML("afterbegin", `<i class="fa-solid fa-square-plus"></i>`);
let post_dialog = window.document.getElementById("post-dialog"); // New Dialog element

let cancel_post = window.document.getElementById("cancel-post"); // Cancel button in dialog form
let save_post = window.document.getElementById("save-post"); // Save button in dialog form

// Opens dialog box for user input
add_post.addEventListener("click", (e) => {
  showDialog(post_dialog);
});

// Closes dialog box without saving any user input
cancel_post.addEventListener("click", (e) => {
  closeDialog(post_dialog);
  e.preventDefault();
});

// Closes dialog box and saves user input
save_post.addEventListener("click", (e) => {
  closeDialog(post_dialog);
  let data = readFormData();
  myPosts.push({'title': data.title, 'date': data.date, 'summary': data.summary});
  createPost(data);
  e.preventDefault();
});

// Pre-filled posts
var myPosts = [
  {'title': 'Inside New Balance’s Plans to Topple the Global Sneaker Hierarchy', 'date': 'February 27, 2023', 'summary': 'The $86 billion global sneaker market has a new major player. Here’s how it happened.'},
  {'title': '23 Wild-Style Ways to Crush Your 2023 Fitness Goals', 'date': 'January 31, 2023', 'summary': 'Gym gear that will make your haters tap out.'},
  {'title': 'The Only First Watch You’ll Ever Need', 'date': 'February 2, 2023', 'summary': 'GQ’s new watch columnist, senior style writer Cam Wolf, makes the case for the funky, inexpensive Seiko 5 Sports series as the ultimate entry point for any aspiring watch collector.'},
];

// Pre-load posts into table
buildList(myPosts);

// Read user input for new post
function readFormData() {
  var formData ={};
  formData["title"] = window.document.getElementById("title").value; // title input
  formData["date"] = window.document.getElementById("date").value; // date input
  formData["summary"] = window.document.getElementById("summary").value; // summary input
  return formData;
}

// Create default list of blog posts
function buildList(data){
  for (var i = 0; i < data.length; i++) {
    createPost(data[i]);
  }
};

// Creates new post 
function createPost(data) {

  let ul = window.document.getElementById("post-list"); // Pointer to ul 

  // Create new elements
  let li = window.document.createElement("li") 
  let newDiv = document.createElement("div");
  let titleEl = window.document.createElement("h2");
  let dateEl = window.document.createElement("h5");
  let sumEl = window.document.createElement("p");
  let edit_title_btn = window.document.createElement("button");
  edit_title_btn.insertAdjacentHTML("beforeend", `<i class="fa-solid fa-pencil"></i>`);
  let edit_date_btn = window.document.createElement("button");
  edit_date_btn.insertAdjacentHTML("beforeend", `<i class="fa-solid fa-pencil"></i>`);
  let edit_sum_btn = window.document.createElement("button");
  edit_sum_btn.insertAdjacentHTML("beforeend", `<i class="fa-solid fa-pencil"></i>`);
  let del_btn = window.document.createElement("button");
  del_btn.setAttribute("id", "delID");
  del_btn.insertAdjacentHTML("beforeend", `<i class="fa-solid fa-trash"></i>`);


  // Create new text for new elements
  let newTitle = document.createTextNode(data.title);
  let newDate = document.createTextNode(data.date);
  let newSummary = document.createTextNode(data.summary);
  let edit_title = document.createTextNode("");
  let edit_date = document.createTextNode("");
  let edit_sum = document.createTextNode("");
  let del = document.createTextNode("");

  // Append text nodes to elements
  titleEl.appendChild(newTitle);
  dateEl.appendChild(newDate);
  sumEl.appendChild(newSummary);
  edit_title_btn.appendChild(edit_title);
  edit_date_btn.appendChild(edit_date);
  edit_sum_btn.appendChild(edit_sum);
  del_btn.appendChild(del);

  // Append elements to div
  newDiv.appendChild(titleEl);
  newDiv.appendChild(edit_title_btn);
 
  newDiv.appendChild(dateEl);
  newDiv.appendChild(edit_date_btn);
  
  newDiv.appendChild(sumEl);
  newDiv.appendChild(edit_sum_btn);
 
  // newDiv.appendChild(del_btn);

  li.appendChild(newDiv); // Append div to li
  li.appendChild(del_btn);

  ul.appendChild(li); // Append li to ul

  // Event listeners for button functionality

  // Edit post title
  edit_title_btn.addEventListener("click", (e) => {
    let edit_title = prompt('Change title:', titleEl.innerHTML);
    if (edit_title === null) {
      return;
    }
    titleEl.innerHTML = edit_title;
  });

  // Edit post date
  edit_date_btn.addEventListener("click", (e) => {
    let edit_date = prompt('Change title:', dateEl.innerHTML);
    if (edit_date === null) {
      return;
    }
    dateEl.innerHTML = edit_date;
  });

  // Edit post summary
  edit_sum_btn.addEventListener("click", (e) => {
    let edit_sum = prompt('Change title:', sumEl.innerHTML);
    if (edit_sum === null) {
      return;
    }
    sumEl.innerHTML = edit_sum;
  });

  // To delete a post from the website
  del_btn.addEventListener("click", (e) => {
    li.remove();
  });
}