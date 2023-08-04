const { match } = require('assert');
const { EOL } = require('os');

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const arrOfSudoku = [];
  const board = boardString.trim().split('');
  for (let i = 0; i < boardString.length; i += 9) {
    arrOfSudoku.push(board.slice(i, i + 9));
  }
  const nunbers = [1,2,3,4,5,6,7,8,9]
  // const nunbers2 = Math.floor(Math.random()*10)
for(let i = 0; i < 9 ;i++ ) {
  for(let j = 0; j < arrOfSudoku[0].length;j++){
    if(arrOfSudoku[i][j] === "-" ) {
  
      arrOfSudoku[i][j] = Math.floor(Math.random()*(9 - 1) + 1)
    }
  }
}
console.table(arrOfSudoku)

}


 


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
