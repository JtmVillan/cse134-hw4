import { showDialog, closeDialog } from "./customdialog.js";

let add_post = window.document.getElementById("add-post"); // Button to add new post
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
  let data = readFormData("title", "date", "summary");
  myPosts.push({'title': data.title, 'date': data.date, 'summary': data.summary});
  createPost(data);
  e.preventDefault();
});

// Pre-filled posts
var myPosts = [
  {'title': 'Really long title that is way too long', 'date': '02/26/2022', 'summary': 'Something something CS'},
  {'title': 'Short title', 'date': '02/27/2022', 'summary': 'Something something engineering'},
  {'title': 'This title is kinda long', 'date': '02/28/2022', 'summary': 'UX/UI design is my passion'},
];

// Pre-load posts into table
buildList(myPosts);

// Read user input for new post
function readFormData(title, date, summary) {
  var formData ={};
  formData["title"] = window.document.getElementById(title).value; // title input
  formData["date"] = window.document.getElementById(date).value; // date input
  formData["summary"] = window.document.getElementById(summary).value; // summary input
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
  let edit_date_btn = window.document.createElement("button");
  let edit_sum_btn = window.document.createElement("button");
  let del_btn = window.document.createElement("button");

  // Create new text for new elements
  let newTitle = document.createTextNode(data.title);
  let newDate = document.createTextNode(data.date);
  let newSummary = document.createTextNode(data.summary);
  let edit_title = document.createTextNode("edit title");
  let edit_date = document.createTextNode("edit date");
  let edit_sum = document.createTextNode("edit summary");
  let del = document.createTextNode("delete");

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
  newDiv.appendChild(dateEl);
  newDiv.appendChild(sumEl);
  newDiv.appendChild(edit_title_btn);
  newDiv.appendChild(edit_date_btn);
  newDiv.appendChild(edit_sum_btn);
  newDiv.appendChild(del_btn);

  li.appendChild(newDiv); // Append div to li

  ul.appendChild(li); // Append li to ul

  // Event listeners for button functionality

  // GOOD CODE
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

  // test
    // // Edit post title
    // edit_title_btn.addEventListener("click", (e) => {
    //   let editDialog = window.document.getElementById("edit-dialog"); // Retrieve edit dialog element
    //   showDialog(editDialog); // Display edit dialog
    //   let editData = readFormData("edit-title", "edit-date", "edit-summary");

    //   console.log(editDialog.children)

    //   // editDialog.children.children[2].setAttribute("placeholder", editData.title);
    //   // editDialog.children.children[5];setAttribute("placeholder", editData.date);
    //   // editDialog.children.children[9];setAttribute("placeholder", editData.summary);

    //   showDialog(editDialog); // Display edit dialog

    //   let edit_title = prompt('Change title:', titleEl.innerHTML);
    //   if (edit_title === null) {
    //     return;
    //   }
    //   titleEl.innerHTML = edit_title;

    //   let edit_date = prompt('Change title:', dateEl.innerHTML);
    //   if (edit_date === null) {
    //     return;
    //   }
    //   dateEl.innerHTML = edit_date;

    //   let edit_sum = prompt('Change title:', sumEl.innerHTML);
    //   if (edit_sum === null) {
    //     return;
    //   }
    //   sumEl.innerHTML = edit_sum;
    // });

  let dialogDel = window.document.getElementById("dialogDel")
  let cancelDel = window.document.getElementById("cancelDel");
  let confirmDel = window.document.getElementById("confirmDel");

  // To delete a post from the website
  del_btn.addEventListener("click", (e) => {
    showDialog(dialogDel);
    cancelDel.addEventListener("click", (e) => {
      closeDialog(dialogDel);
    });

    confirmDel.addEventListener("click", (e) => {
      closeDialog(dialogDel);
      li.remove(dialogDel);
    });
      
  });

  // let dialogEditTitle = window.document.getElementById("dialogEditTitle");
  // let cancelEditTitle = window.document.getElementById("cancelEditTitle");
  // let confirmEditTitle = window.document.getElementById("confirmEditTitle");

  // let dialogEditDate = window.document.getElementById("dialogEditDate");
  // let cancelEditDate = window.document.getElementById("cancelEditDate");
  // let confirmEditDate = window.document.getElementById("confirmEditDate");

  // let dialogEditSum = window.document.getElementById("dialogEditSum");
  // let cancelEditSum = window.document.getElementById("cancelEditSum");
  // let confirmEditSum = window.document.getElementById("confirmEditSum");


  // // To edit a title from a post
  // edit_title_btn.addEventListener("click", (e) => {
  //   let edit_title = window.document.getElementById("edit-title");
  //   edit_title.setAttribute("placeholder", data.title);
  //   showDialog(dialogEditTitle);
  //   cancelEditTitle.addEventListener("click", (e) => {
  //     closeDialog(dialogEditTitle);
  //     e.preventDefault();
  //   });
  //   confirmEditTitle.addEventListener("click", (e) => {
  //     closeDialog(dialogEditTitle);
  //     titleEl.innerHTML = edit_title.value;
  //     e.preventDefault();
  //   });
  // });

  // // To edit a date from a post
  // edit_date_btn.addEventListener("click", (e) => {
  //   let edit_date = window.document.getElementById("edit-date");
  //   edit_date.setAttribute("placeholder", data.date);
  //   showDialog(dialogEditDate);
  //   cancelEditDate.addEventListener("click", (e) => {
  //     closeDialog(dialogEditDate);
  //     e.preventDefault();
  //   });
  //   confirmEditDate.addEventListener("click", (e) => {
  //     closeDialog(dialogEditDate);
  //     dateEl.innerHTML = edit_date.value;
  //     e.preventDefault();
  //   });
  // });

  // // To edit a sum from a post
  // edit_sum_btn.addEventListener("click", (e) => {
  //   let edit_sum = window.document.getElementById("edit-sum");
  //   edit_sum.setAttribute("placeholder", data.summary);
  //   showDialog(dialogEditSum);
  //   cancelEditSum.addEventListener("click", (e) => {
  //     closeDialog(dialogEditSum);
  //     e.preventDefault();
  //   });
  //   confirmEditSum.addEventListener("click", (e) => {
  //     closeDialog(dialogEditSum);
  //     sumEl.innerHTML = edit_sum.value;
  //     e.preventDefault();
  //   });
  // });
}