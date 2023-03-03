import { showDialog, closeDialog } from "./customdialog.js";

// import * as DOMPurify from './DOMPurify/dist/purify.min.js';
// Part 1 - Simple Dialogs

// Alert
let al = window.document.getElementById("alertBtn");
            
al.addEventListener("click", myAlert);

function myAlert() {
    alert ("You have been alerted!");
}

// Confirm
let con = window.document.getElementById("confirmId");

con.addEventListener("click", (c) => {
    let value = "Press a button!\nEither Ok or Cancel.";
    if (confirm(value) == true) {
        value = "Ok";
    } else {
        value = "Cancel";
    }
    document.getElementById("confirmOutput").innerHTML = "The value returned by the confirm method is : " + value;
});

// Prompt
let pro = window.document.getElementById("promptId");

pro.addEventListener("click", myPrompt);

function myPrompt() {
    let value = prompt("Please enter something (unsafe)");
    let error = "User didn't enter anything";
    // let x = document.createElement
    if (value == null || value == "") {
        document.getElementById("promptOutput").innerHTML = error;
    }
    else {
        document.getElementById("promptOutput").innerHTML =
        "The value returned by the prompt method is : " + value;
    }
}

// SaferPrompt
let safe = window.document.getElementById("safeId");


safe.addEventListener("click", safePrompt);

function safePrompt() {

    let value = prompt("Please enter something (safe!)");
    // let value = DOMPurify.sanitize(value);

    let error = "User didn't enter anything";
    if (value == null || value == "") {
        document.getElementById("safeOutput").innerHTML = error;
    }
    else {
        document.getElementById("safeOutput").innerHTML =
        "The value returned by the prompt method is : " + value;
    }
}

// Part 2 - Custom Dialogs

let myDialog = window.document.getElementById("myDialogId");
let showDialog = window.document.getElementById("showDialogId");
let closeDialog = window.document.getElementById("closeDialogId");

// Make dialog show when button pressed
showDialog.addEventListener("click", (e) => {
    showDialog(myDialog);
})

// make dialog close
closeDialog.addEventListener("click", (e) => {
    closeDialog(myDialog);
})