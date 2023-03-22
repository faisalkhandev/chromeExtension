let myLeads = [];
let inputValue = document.getElementById("inputValue");
let saveBtn = document.getElementById("saveButton");
let ul = document.getElementById("ul-el");
let clearBtn = document.getElementById("clearButton")
let saveTabs = document.getElementById("saveTabs")

let leadStorage = JSON.parse(localStorage.getItem("myLeads")) //getting stored values in Local Storage
let listItems = "";
const tabs = [{
    url: "https://www.linkedin.com/in/faisalkhandev/"
}]


saveTabs.addEventListener("click", () => {



})



let renderData = (lead) => {
    listItems = ""; // reset listItems to avoid duplicates
    for (let i = 0; i < lead.length; i++) {
        listItems += `
        <li>
        
        <a target="_blank" href="${lead[i]}">  ${lead[i]} 

        </li>`
    }
    ul.innerHTML = listItems;
};

if (leadStorage) {
    myLeads = leadStorage
    renderData(myLeads)
}


saveBtn.addEventListener("click", () => {
    let lead = inputValue.value.trim(); // remove any leading or trailing whitespace
    if (lead === "") {
        return;
    }
    if (myLeads.includes(lead)) { // check if lead already exists 
        alert("This lead already exist.");
    }
    else {
        myLeads.push(lead);
        inputValue.value = "";
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderData(myLeads);
    }

});

clearBtn.addEventListener("dblclick", () => {
    localStorage.clear()
    myLeads = []
    renderData(myLeads)
})