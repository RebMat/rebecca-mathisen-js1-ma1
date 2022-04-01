//Q1

const cat = {
  complain: function () {
    console.log("Meow");
  },
};

cat.complain();

//Q2 & Q3 & Q4

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";
heading.style.fontSize = "2em";
heading.classList.add("subheading");

//Q5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

//Q6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//Q7

const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function ListOfCats(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

ListOfCats(cats);

//Q8

function createCats(cats) {}
