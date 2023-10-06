const date = new Date();
let year = date.getFullYear
        const students = [
            {
            name: "ricky",
            grade: 10,
            intellegent: false,
            braincells: null,
            favorite_food: ["fried chicken", "mac and cheeze", "corn bread", "doritos"],
            DOB: 2011,
            age: function(){
                return year - this.DOB;
        },
    },
{
            name: "harry",
            grade: 10,
            intellegent: false,
            braincells: true,
            favorite_food: ["ramen", "sushi", "uni", "wagyu"],
            DOB: 2011,
            age: function(){
                return year - this.DOB;
        },
    },
{
            name: "ty",
            grade: 10,
            intellegent: true,
            braincells: true,
            favorite_food: ["mashed potatoes", "brocolii", "curry", "fried rice"],
            DOB: 2008,
            age: function(){
                return year - this.DOB;
         }
    }
]
// students.forEach((student) => console.log(student.name))
const braincells = students.filter((student) => console.log(student.braincells))
console.log(braincells);