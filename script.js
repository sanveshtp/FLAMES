let yourname = document.getElementById("yname")
let crushname = document.getElementById("cname")
let sub = document.getElementById("relbut")

sub.addEventListener("click", (e) => {
    e.preventDefault()
    let nameArray = Array.from(yourname.value);
    let crushArray = Array.from(crushname.value);
    for (let x of nameArray) {
        if (crushArray.includes(x)) {
            nameArray.splice(nameArray.indexOf(x), 1);
            crushArray.splice(crushArray.indexOf(x), 1);
        }
    }
    let count = nameArray.length + crushArray.length;
    let flames = ["F", "L", "A", "M", "E", "S"];
    while (flames.length > 1) {
        flames.splice(count % flames.length - 1, 1);
    }
    let rs = document.getElementById("fr")
    if (flames[0] === "F") {
        rs.innerHTML = ("FRIENDS");
    } else if (flames[0] === "L") {
        rs.innerHTML = ("LOVERS");
    } else if (flames[0] === "A") {
        rs.innerHTML = ("AFFECTION");
    } else if (flames[0] === "M") {
        rs.innerHTML = ("MARRIAGE");
    } else if (flames[0] === "E") {
        rs.innerHTML = ("ENEMIES");
    } else {
        rs.innerHTML = ("SIBLINGS");
    }
})