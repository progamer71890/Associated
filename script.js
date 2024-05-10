// // Lesson 3: Associative Arrays & Data Options

// // Ex 1. English grades

// let lastNames = ["McDavid", "Nuggent-Hopkins", "Draisaitl"];
// let englGrades = [73, 91, 85];
// let writingDiploma = [true, false, false];

// let lastN = lastNames.pop();
// let lastG = englGrades.pop();
// let lastD = writingDiploma.pop();

// lastNames.unshift(lastN);
// englGrades.unshift(lastG);
// writingDiploma.unshift(lastD);

// console.table([lastNames, englGrades, writingDiploma])

// console.log("Last name \t Grade \t Writing Diploma");

// console.log("--------- \t ----- \t ---------------");

// console.log(
//   lastNames[0] + "\t\t\t" + englGrades[0] + "\t\t\t\t" + writingDiploma[0]
// );

// console.log(
//   lastNames[1] + "\t" + englGrades[1] + "\t\t\t\t" + writingDiploma[1]
// );

// console.log(
//   lastNames[2] + "\t\t" + englGrades[2] + "\t\t\t\t" + writingDiploma[2]
// );

// // You Try: Put this data in alphabetical order using array methods (e.g. push/pop/splice/etc)

// // Ex. 2. Rectangles

// var rectangles = [
//   [100, 150, 20, 200],
//   [220, 200, 130, 45],
//   [150, 300, 75, 75],
// ];

// console.log(rectangles[1][2]);

// // You Try: build the other rectangles, preferrably using a loop

// for (let i = 0; i < rectangles.length; i++) {
//   ctx.fillStyle = "green";
//   ctx.fillRect(
//     rectangles[i][0],
//     rectangles[i][1],
//     rectangles[i][2],
//     rectangles[i][3]
//   );
// }

// // Push another rectangle
// var aRectangle = [20, 300, 45, 75];
// rectangles.push(aRectangle);
// console.log(rectangles);

// // Change 2nd rectangle width to 200
// rectangles[1][2] = 200;
// console.log(rectangles);

// // Ex 1.
// var firstNames = ["Bones", "Welma", "Frank", "Han", "Jack"];
// var lastNames = ["Smith", "Seger", "Mathers", "Solo", "Jackles"];
// var heights = [158, 169, 172, 183, 201];

// const firstName = prompt("First Name:");
// const lastName = prompt("Last Name:");
// const height = prompt("Your Height:");

// if (height < 158) {
//   firstNames.unshift(firstName);
//   lastNames.unshift(lastName);
//   heights.unshift(height);
// } else if (height > 201) {
//   firstNames.push(firstName);
//   lastNames.push(lastName);
//   heights.push(height);
// } else {
//   for (let i = 0; i < heights.length; i++) {
//     if (height < heights[i]) {
//       heights.splice(i, 0, height);
//       firstNames.splice(i, 0, firstName);
//       lastNames.splice(i, 0, lastName);

//       break;
//     }
//   }
// }

// console.table([firstNames, lastNames, heights]);

// // Ex 2.

// let ticTacToeBoard = [
//   ["X", "X", "O"],
//   ["", "X", "O"],
//   ["", "", ""],
// ];
// let row;
// let column;

// function displayBoard(board) {
//   for (let row = 0; row < 3; row++) {
//     console.log(
//       "[" +
//         board[row][0] +
//         "]\t[" +
//         board[row][1] +
//         "]\t[" +
//         board[row][2] +
//         "]"
//     );
//   }
// }

// function checkWinner(player, board) {
//   for (let i = 0; i < 3; i++) {
//     // rows
//     if (board[i][0] == player && board[i][1] == player && board[i][2] == player)
//       return true;

//     // columns
//     if (board[0][i] == player && board[1][i] == player && board[2][i] == player)
//       return true;
//   }

//   //   diagonal
//   if (board[0][0] == player && board[1][1] == player && board[2][2] == player)
//     return true;

//   if (board[0][2] == player && board[1][1] == player && board[2][0] == player)
//     return true;

//   return false;
// }

// do {
//   row = +prompt("Enter the row: ") - 1;
//   column = +prompt("Enter the column: ") - 1;
// } while (ticTacToeBoard[row][column] != "");

// ticTacToeBoard[row][column] = "X";
// displayBoard(ticTacToeBoard);

// console.log(checkWinner("X", ticTacToeBoard));

// Ex. 3

var dragon = {
  health: 100,
  atkString: ">",
  attackPwr: 15,
};

function attack(actor) {
  let attackStr = "";
  for (let i = 0; i < actor.attackPwr; i++) {
    attackStr += actor.atkString;
  }
  console.log(attackStr);
}

var player = {
  health: randomInt(80, 100),
  atkString: "=|====>|",
  attackPwr: randomInt(10, 20),
};

console.log("The dragon attacks!");
attack(dragon);
player.health -= dragon.attackPwr;

console.log(
  `The player has been struck! -${dragon.attackPwr} damage for ${player.health} health`
);

console.log("");

console.log("The player attacks!");
attack(player);
dragon.health -= player.attackPwr;

console.log(
  `The dragon has been struck! -${player.attackPwr} damage for ${dragon.health} health`
);
