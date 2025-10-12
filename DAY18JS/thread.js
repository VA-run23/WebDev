const post= {
    username: "@varun",
    content:"This is my #firstPost",
    likes: 150,
    repost:5, 
    tags: ["apnaCollege", "@delta"]
};

let student={
    name:"Varun",
    marks:[99,98,100],
    city:"Mysore",
    age:18
};



const class_info = {
    alok: {
        grade:"A++",
        city:"Mysore",
    },
    pradhu:
    {
        grade:"A+A",
        city:"Kollegal",
    },
    kiran: {
        grade:"A",
        city:"T N Pura",
    },
};

console.log(class_info.alok.grade);


const classInfo =[
    skanda={
        city:"Mysore",
        marks:"90",
    },
    sujay={
        city:"Kumta",
        marks:"98",
    }
]

console.log(classInfo[0].marks);
//the below one is wrong
console.log(classInfo[0].skanda.marks);
