let myLeads = [];
let inputValue = document.getElementById("inputValue");
let saveBtn = document.getElementById("saveButton");
let ul = document.getElementById("ul-el");

let leadStorage = JSON.parse(localStorage.getItem("myLeads"))

let listItems = "";


let renderData = () => {
    listItems = ""; // reset listItems to avoid duplicates
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>
        
        <a target="_blank" href="${myLeads[i]}">  ${myLeads[i]} 

        </li>`
    }
    ul.innerHTML = listItems;
};


if (leadStorage) {
    myLeads = leadStorage
    renderData()
}



saveBtn.addEventListener("click", () => {
    let lead = inputValue.value.trim(); // remove any leading or trailing whitespace
    if (lead === "") {
        return;
    }
    if (myLeads.includes(lead)) { // check if lead already exists
        alert("This lead already exists.");
    }
    else {
        myLeads.push(lead);
        inputValue.value = "";
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderData();
    }

});