let example = {
    "id": 1, 
    "dept": "CompSci", 
    "courseNum": 101, 
    "courseName": "HTML5 and CSS3", 
    "instructor": "Rob", 
    "startDate": "July 8", 
    "numDays": 10
};

const base_url = "http://127.0.0.1:8081";
const courses_endpoint = "/api/courses";
function onRemove(which){
    const id = which.closest("tr").id;
    alert(id)
}
async function refreshList(list){
    // list.innerHTML = "Can has list???"
    const response = await fetch(base_url + courses_endpoint);
    const data = await response.json(); // parse json
    let output = `<table border="1">`;
    data.forEach((item)=>{
        output += `<tr id="${item.id}">
        <!-- <td>${item.id}</td> -->
        <td>${item.dept}</td>
        <td>${item.courseNum}</td>
        <td>${item.courseName}</td>
        <td>${item.instructor}</td>
        <td>${item.numDays}</td>
        <td><button onclick="onRemove(this)">Remove</button></td>
        </tr>`;
    });
    output += `</table>`;
    list.innerHTML = output;
}

document.addEventListener("DOMContentLoaded", ()=>{
    const list = document.getElementById("item-list");
    refreshList(list);
});//end loaded