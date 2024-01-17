const form = document.getElementById("form")

form.addEventListener("submit",function(event)
{
    event.preventDefault()
    const formData = new FormData(form)
    //Can't just console.log formData, special type of object
    //console.log(formData)
    // save it in another variable first
    const myObj = Object.fromEntries(formData)
    console.log(myObj)
    //correctly logs the formData object with the keys being the input name, attribute and the value being the value of the input
} )