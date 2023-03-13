let myLeads = ["faisalkhandev.com"];
let inputValue = document.getElementById("inputValue");
let saveBtn = document.getElementById("saveButton");
let ul = document.getElementById("ul-el");
let listItems = "";

saveBtn.addEventListener("click", () => {
    let lead = inputValue.value.trim(); // remove any leading or trailing whitespace
    if (lead === "") {
        return;
    }
    if (myLeads.includes(lead)) { // check if lead already exists
        alert("This lead already exists.");
    } else {
        myLeads.push(lead);
        renderData();
        inputValue.value = "";
    }

});

let renderData = () => {
    listItems = ""; // reset listItems to avoid duplicates
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>";
    }
    ul.innerHTML = listItems;
};