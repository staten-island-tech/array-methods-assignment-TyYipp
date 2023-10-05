const students = [{
    name: "ricky",
    grade: 10,
    intellegent: false,
    braincells: null,
    favorite_food: ["fried chicken", "mac and cheeze", "corn bread", "doritos"]
},
{
    name: "harry",
    grade: 10,
    intellegent: false,
    braincells: true,
    favorite_food: ["ramen", "sushi", "uni", "wagyu"]
},
{
    name: "ty",
    grade: 10,
    intellegent: true,
    braincells: true,
    favorite_food: ["mashed potatoes", "brocolii", "ice cream", "jello"]
}
]
students.name.forEach((element) => console.log(element));