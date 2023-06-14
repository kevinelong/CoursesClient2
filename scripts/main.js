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
    let output = `<table>`;
    data.forEach((item)=>{
        output += `<tr id="${item.id}">
        <td>
            <details>
                <summary>${item.courseName}</summary>
                <table>
                    <tr><th>id</th><td>${item.id}</td></tr>
                    <tr><th>dept</th><td>${item.dept}</td></tr>
                    <tr><th>courseNum</th><td>${item.courseNum}</td></tr>
                    <tr><th>instructor</th><td>${item.instructor}</td></tr>
                    <tr><th>numDays</th><td>${item.numDays}</td></tr>
                </table>
                <button onclick="onEdit(this)">Edit Item in Form Above</button>
                <button onclick="onRemove(this)">Remove</button>
            </details>
        </td>
        </tr>`;
    });
    output += `</table>`;
    list.innerHTML = output;
}

document.addEventListener("DOMContentLoaded", ()=>{
    const list = document.getElementById("item-list");
    refreshList(list);
});//end loaded