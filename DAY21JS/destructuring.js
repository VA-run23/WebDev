let names=["tony","Bruce", "steve", "peter", "abc", "123"];
let [winner, runnerup, ...others]= names;
console.log(winner, runnerup);
console.log(others , "abcd");


let students={
    name:" Karin",
    username: "Karin@123",
    class: 9,
    password:"abcd"
};

let {username,/*the key in the above object must be same here also  */ password, city="Mumbai"} = students;
