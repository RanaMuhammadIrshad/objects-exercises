/* 
EX 1 UPVOTES DOWNVOTES

Given an object containing counts of both upVotes and downVotes, return what vote count should be displayed. This is calculated by subtracting the number of downVotes from upVotes.
Examples
getVoteCount({ upVotes: 13, downVotes: 0 }) ➞ 13
getVoteCount({ upVotes: 2, downVotes: 33 }) ➞ -31
getVoteCount({ upVotes: 132, downVotes: 132 }) ➞ 0
Notes
- You can expect only positive integers for vote counts. */
console.log(`******01******`);
function getVoteCount(vote) {
  console.log(vote.upVotes - vote.downVotes);
}

getVoteCount({ upVotes: 13, downVotes: 0 });
getVoteCount({ upVotes: 2, downVotes: 33 });
getVoteCount({ upVotes: 132, downVotes: 132 });

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
  console.log(obj.width * obj.length * obj.height);
}

volumeOfBox({ width: 2, length: 5, height: 1 });
volumeOfBox({ width: 4, length: 2, height: 2 });
volumeOfBox({ width: 2, length: 3, height: 5 });
/* EX 3 LUKE I AM YOUR... 
Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.
| Person |	Relation |
| --- | ----------- |
| Darth Vader |	father |
| Leia |	sister |
| Han |	brother in law |
| R2D2	| droid |
Examples
relationToLuke("Darth Vader") ➞ "Luke, I am your father."
relationToLuke("Leia") ➞ "Luke, I am your sister."
relationToLuke("Han") ➞ "Luke, I am your brother in law."
 */
console.log(`******03******`);

const lukeSkywalker = {
  firstName: "Luke",
  lastName: "Skywalker",
  "Darth Vader": "father",
  leia: "sister",
  han: "brother in law ",
  R2D2: "droid",
};

function relationToLuke(str) {
  if (str === "Darth Vader") console.log(`Luke, I am your father`);
  if (str === "Leia") console.log(`Luke, I am your sister`);
  if (str === "Han") console.log(`Luke, I am your brother in law`);
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
