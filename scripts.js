const disappear= (element) => {
    console.log("element was clicked. And the ID is:" + element.id)
    // console.log(element.style)

    document.getElementById(element.id).style.display = "none"

}