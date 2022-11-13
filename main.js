console.log(document);

// print the initial document object
console.log(document);
// create an HTML element - h1
let header = document.getElementsByTagName("h1")[0];
header.setAttribute("id", "header1");
header = document.getElementById("header1");
header.style.display = "none";

let h1 = document.createElement("h1");
h1.innerText = "Lab12 Assignment";
h1.style.color = "blue"

let h2 = document.createElement("h2");
h2.innerText = "Task";
h2.style.color = "red"

let p1 = document.createElement("p");
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"

let ul1 = document.createElement("ul")

let listItems = [
  {
    text: "find elements in the DOM (<b>5 points</b>);",
    class: "even",
    style: {
      color: "green"
    }
  },
  {
    text: "create/add/remove elements (<b>5 points</b>);",
    class: "odd",
    style: {
      color: "purple"
    }
  },
  {
    text: "change content of the elements (<b>5 points</b>);",
    class: "even",
    style: {
      color: "green"
    }
  },
  {
    text: "change styles of the elements (<b>5 points</b>);",
    class: "odd",
    style: {
      color: "purple"
    }
  },
  {
    text: "change attributes of the elements (<b>5 points</b>);",
    class: "even",
    style: {
      color: "green"
    }
  },
  {
    text: "change classes of the elements (<b>5 points</b>).",
    class: "odd",
    style: {
      color: "purple"
    }
  },
]

addListItems(ul1, listItems)

let p2 = document.createElement("p");
p2.innerHTML = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this <a href=\"https:"+'/'+'/'+"github.com"+'/'+"yessen"+'/'+"nu_web_programming"+'/'+"tree"+'/'+"main"+'/'+"week12\">link.</a>"

// create an HTML element - a
// let a1 = document.createElement("a");
// a1.setAttribute("href", "https://w3schools.com");
// a1.innerText = "W3Schools";

// append the h1-element to the body-element
document.body.appendChild(h1);
document.body.appendChild(document.createElement("HR"));
document.body.appendChild(h2);
document.body.appendChild(p1)
document.body.appendChild(ul1)
document.body.appendChild(p2)
document.body.appendChild(document.createElement("HR"));

let h3 = document.createElement("h2");
h3.style.color = "red";
h3.innerText = "Submission";
document.body.appendChild(h3);

let p3 = document.createElement("p");
p3.innerText = "To submit your work, follow these instructions:";
document.body.appendChild(p3);

let ul2 = document.createElement("ul")


listItems = [
  {
    text: " Create a new repository on Github, named <b>lab12</b> (<b>1 point</b>).",
    class: "even",
    style: {
      color: "green"
    }
  },
  {
    text: "Clone this repository to your local machine and work inside it.",
    class: "odd",
    style: {
      color: "purple"
    }
  },
  {
    text: "Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with \"Hello, World!\" message (<b>1 point</b>).",
    class: "even",
    style: {
      color: "green"
    }
  },
  {
    text: "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).",
    class: "odd",
    style: {
      color: "purple"
    }
  },
  {
    text: "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).",
    class: "even",
    style: {
      color: "green"
    }
  },
  {
    text: "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).",
    class: "odd",
    style: {
      color: "purple"
    }
  },
  {
    text: "After you finish your work, submit it to the Github (<b>2 points</b>).",
    class: "even",
    style: {
      color: "green"
    }
  },
]

addListItems(ul2, listItems);
document.body.appendChild(ul2);
document.body.appendChild(document.createElement("HR"));


function generateContent() {
  let ch = document.body.children;

  if (ch.length < 6) {
    // create an HTML element - h1
    let h1 = document.createElement("h1");
    // change the property of the element
    // assign some text content to the element
    h1.innerText = "Hello, World!";
    // change the style of the element
    h1.style.color = "blue";
    // append the h1-element to the body-element
    document.body.appendChild(h1);

    let p1 = document.createElement("p");
    p1.innerText = "This is the first paragraph!";
    p1.style.color = "red";
    p1.style.backgroundColor = "yellow";
    document.body.appendChild(p1);

    let p2 = document.createElement("p");
    p2.innerHTML = "<strong>This is the second paragraph!</strong>";
    p2.style.color = "white";
    p2.style.backgroundColor = "black";
    p2.style.fontSize = "18pt";
    document.body.appendChild(p2);

    let p3 = document.createElement("p");
    p3.innerHTML = "<i>This is the third paragraph!</i>";
    p3.style.backgroundColor = "lime";
    p3.style.fontSize = "20pt";
    document.body.appendChild(p3);

    let btn1 = document.getElementById("btn1");
    console.log(btn1.classList);
    btn1.classList.add("btn");
    console.log(btn1.classList);
    btn1.classList.remove("btn");
    console.log(btn1.classList);

    let btn2 = document.getElementById("btn2");
    btn2.setAttribute("onclick", "clearContent()");
    btn2.disabled = false;
  }
  console.log(ch);
}

function clearContent() {
  let ch = document.body.children;
  console.log(ch);

  if (ch.length > 2) {
    while (ch.length > 2) {
      document.body.removeChild(ch[ch.length - 1]);
      console.log(ch);
    }
  }
  let btn2 = document.getElementById("btn2");
  btn2.disabled = true;
}

function addListItems(ulist, objlist) {
    objlist.forEach( (obj) => {
      let li = document.createElement("li")
      li.innerHTML = obj.text;
      li.setAttribute("class", obj.class);
      li.setAttribute("style", "color: " + obj.style.color);
      ulist.appendChild(li);
    } )
}