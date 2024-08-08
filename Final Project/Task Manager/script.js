document.getElementById("btn1").addEventListener("click", function(){

    let tasakDataValue = []

function getDatsFromLS(){
    return JSON.parse(localStorage.getItem("taskData")) || [];
}
    tasakDataValue = getDatsFromLS() 
    let input1 = document.getElementById("inputBox1")

    let addedTask = document.getElementById("addedTask")

    let Newtask = document.createElement("div")

    let Tasktext = document.createElement("p")
    Tasktext.innerHTML = input1.value

    let priority = document.getElementById("priority")
    let Tasktext2 =document.createElement("p")
    Tasktext2.innerHTML = priority.value

    Newtask.append(Tasktext,Tasktext2)
    addedTask.append(Newtask)

    addDataToLS(input1.value,priority.value)

})

function addDataToLS(Data,Data1){
    return localStorage.setItem("taskData", JSON.stringify(Data,Data1 ));
}