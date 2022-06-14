/*
EX 1 UPVOTES DOWNVOTES

Given an object containing counts of both upVotes and downVotes, return what vote count should be displayed. This is calculated by subtracting the number of downVotes from upVotes.
Examples
getVoteCount({ upVotes: 13, downVotes: 0 }) ➞ 13
getVoteCount({ upVotes: 2, downVotes: 33 }) ➞ -31
getVoteCount({ upVotes: 132, downVotes: 132 }) ➞ 0
Notes
- You can expect only positive integers for vote counts. */
console.log(`******01-Method-1******`);
function getVoteCount(vote) {
  console.log(vote.upVotes - vote.downVotes);
}

getVoteCount({ upVotes: 13, downVotes: 0 });
getVoteCount({ upVotes: 2, downVotes: 33 });
getVoteCount({ upVotes: 132, downVotes: 132 });

console.log(`******01-Method-2******`);

let myObj = {
  getVoteCount: function(passedObj) {
  return passedObj.upVotes - passedObj.downVotes

  }
}

let vote1 = myObj.getVoteCount({ upVotes: 13, downVotes: 0 });
console.log(vote1);
let vote2 = myObj.getVoteCount({ upVotes: 2, downVotes: 33 });
console.log(vote2);
let vote3 = myObj.getVoteCount({ upVotes: 132, downVotes: 132 });
console.log(vote3);

/*
EX 2 VOLUME OF A BOX
Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
Examples
volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
Notes
- Don't forget to return the result.
- Remember that the values are in an object.
- Volume is length * width * height.
 */
console.log(`******02******`);
function volumeOfBox(obj) {
  return obj.width * obj.length * obj.height;
}
const volume1 = volumeOfBox({ width: 2, length: 5, height: 1 });
console.log(volume1);
const volume2 = volumeOfBox({ width: 4, length: 2, height: 2 });
console.log(volume2);
const volume3 = volumeOfBox({ width: 2, length: 3, height: 5 });
console.log(volume3);
/* EX 3 LUKE I AM YOUR...
Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.
| Person |	Relation |
| --- | ----------- |
| Darth Vader |	father |
| Leia |	sister |
| Han |	brother in law |   b vb        v
| R2D2	| droid |
Examples
relationToLuke("Darth Vader") ➞ "Luke, I am your father."
relationToLuke("Leia") ➞ "Luke, I am your sister."
relationToLuke("Han") ➞ "Luke, I am your brother in law."
 */
console.log(`******03******`);

function relationToLuke(str) {
  

      let relObj = {
    firstName : 'Luke',
      "Darth Vader": "father",
      Leia: "sister",
      Han: "brother in law",
      R2D2: "droid",

    getRelation: function () {
      console.log(`${this.firstName}, I am your ` + relObj[str]);
    },
  };

  relObj.getRelation();
}

relationToLuke("Darth Vader");
relationToLuke("Leia");
relationToLuke("Han");





/* 
EX 4 SPORTS PLAYER --------------------------------------------------------------------

Create an obj containing the following properties for a particular football player:

name\
age\
height\
weight\
<br>
Also, create three methods that returns the following strings:

getAge() returns "name is age 25" \
getHeight() returns "name is 175 cm" \
getWeight() returns "name weighs 75 kg" \
<br>
Notes
- name will be passed in as a string  */

console.log(`******04******`);

const footballPlayer = {
  age: 30,
  height: 175,
  weight: 75,

  getAge(str) {
    console.log(`${str} is age of ${this.age}`);
  },
  getHeight(str) {
    console.log(`${str} is ${this.height} cm`);
  },
  getWeight(str) {
    console.log(`${str} weight ${this.weight} kg`);
  },
};

footballPlayer.getAge("John");
footballPlayer.getHeight("John");
footballPlayer.getWeight("John");
