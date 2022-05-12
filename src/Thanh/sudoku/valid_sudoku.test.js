// const chai = require("chai");
// const assert = chai.assert;
// const sinon = require("sinon");
// const {validSudoku} = require('./valid_sudoku');

// describe("Redeem", () => {
  
//   it("Should check valid sudoku", async () => {
//     const items = [
//       {
//         input: [
//           ["5","3",".",".","7",".",".",".","."],
//           ["6",".",".","1","9","5",".",".","."],
//           [".","9","8",".",".",".",".","6","."],
//           ["8",".",".",".","6",".",".",".","3"],
//           ["4",".",".","8",".","3",".",".","1"],
//           ["7",".",".",".","2",".",".",".","6"],
//           [".","6",".",".",".",".","2","8","."],
//           [".",".",".","4","1","9",".",".","5"],
//           [".",".",".",".","8",".",".","7","9"]
//         ],
//         result: true
//       },
//       {
//         input: [
//           ["5","3",".",".","7",".",".",".","."],
//           ["6",".",".","1","9","5",".",".","."],
//           [".","9","8",".",".",".",".","6","."],
//           ["8",".",".",".","6",".",".",".","3"],
//           ["4",".",".","8",".","3",".",".","1"],
//           ["7",".",".",".","2",".",".",".","6"],
//           ["8","6",".",".",".",".","2","8","."],
//           [".",".",".","4","1","9",".",".","5"],
//           [".",".",".",".","8",".",".","7","9"]
//         ],
//         result: false
//       },
//       {
//         input: [
//           ["5","3",".",".","7",".",".",".","."],
//           ["6",".",".","1","9","5",".",".","."],
//           [".","9","8",".",".",".",".","6","."],
//           ["8",".",".",".","6",".",".",".","3"],
//           ["4",".",".","8",".","3",".",".","1"],
//           ["7",".",".",".","2",".",".",".","6"],
//           [".","6",".",".",".",".","2","8","."],
//           [".",".",".","4","1","9",".",".","5"],
//           [".","9",".",".","8",".",".","7","9"]
//         ],
//         result: false
//       },
//       {
//         input: [
//           ["5","3",".",".","7",".",".",".","."],
//           ["6",".",".","1","9","5",".",".","."],
//           [".","9","8",".",".",".","2","6","."],
//           ["8",".",".",".","6",".",".",".","3"],
//           ["4",".",".","8",".","3",".",".","1"],
//           ["7",".",".",".","2",".",".",".","6"],
//           [".","6",".",".",".",".","2","8","."],
//           [".",".",".","4","1","9",".",".","5"],
//           [".",".",".",".","8",".",".","7","9"]
//         ],
//         result: false
//       },
//       {
//         input: [
//           ["5","3",".",".","7",".",".",".","."],
//           ["6",".",".","1","9","5",".","1","."],
//           [".","9","8",".",".",".",".","6","."],
//           ["8",".",".",".","6",".",".",".","3"],
//           ["4",".",".","8",".","3",".",".","1"],
//           ["7",".",".",".","2",".",".",".","6"],
//           [".","6",".",".",".",".","2","8","."],
//           [".",".",".","4","1","9",".",".","5"],
//           [".",".",".",".","8",".",".","7","9"]
//         ],
//         result: false
//       },
//       {
//         input: [
//           ["5","3",".",".","7",".",".",".","."],
//           ["6",".",".","1","9","5",".",".","."],
//           [".","9","8",".",".",".",".","6","."],
//           ["8",".",".",".","6",".",".",".","3"],
//           ["4",".",".","8",".","3",".",".","1"],
//           ["7",".","6",".","2",".",".",".","6"],
//           [".","6",".",".",".",".","2","8","."],
//           [".",".",".","4","1","9",".",".","5"],
//           [".",".",".",".","8",".",".","7","9"]
//         ],
//         result: false
//       },
//       {
//         input: [
//           ["5","3",".",".","7",".",".",".","."],
//           ["6",".",".","1","9","5",".",".","."],
//           ["3","9","8",".",".",".",".","6","."],
//           ["8",".",".",".","6",".",".",".","3"],
//           ["4",".",".","8",".","3",".",".","1"],
//           ["7",".",".",".","2",".",".",".","6"],
//           [".","6",".",".",".",".","2","8","."],
//           [".",".",".","4","1","9",".",".","5"],
//           [".",".",".",".","8",".",".","7","9"]
//         ],
//         result: false
//       },
//       {
//         input: [
//           ["5","3",".",".","7","1",".",".","."],
//           ["6",".",".","1","9","5",".",".","."],
//           ["3","9","8",".",".",".",".","6","."],
//           ["8",".",".",".","6",".",".",".","3"],
//           ["4",".",".","8",".","3",".",".","1"],
//           ["7",".",".",".","2",".",".",".","6"],
//           [".","6",".",".",".",".","2","8","."],
//           [".",".",".","4","1","9",".",".","5"],
//           [".",".",".",".","8",".",".","7","9"]
//         ],
//         result: false
//       },
//       {
//         input: [
//           ["5","3",".",".","7",".",".",".","."],
//           ["6",".",".","1","9","5",".",".","."],
//           ["3","9","8",".",".",".",".","6","."],
//           ["8",".",".",".","6",".",".",".","3"],
//           ["4",".",".","8",".","3",".",".","1"],
//           ["7",".",".",".","2",".",".",".","6"],
//           [".","6",".",".",".",".","2","8","."],
//           [".",".",".","4","1","9",".","2","5"],
//           [".",".",".",".","8",".",".","7","9"]
//         ],
//         result: false
//       },
//       {
//         input: [
//           ["5","3",".",".","7",".",".",".","."],
//           ["6",".",".","1","9","5",".",".","."],
//           ["3","9","8",".",".",".",".","6","."],
//           ["8",".",".",".","6",".",".",".","3"],
//           ["4",".",".","8",".","3",".",".","1"],
//           ["7",".",".",".","2",".","3",".","6"],
//           [".","6",".",".",".",".","2","8","."],
//           [".",".",".","4","1","9",".",".","5"],
//           [".",".",".",".","8",".",".","7","9"]
//         ],
//         result: false
//       },
//       {
//         input: [
//           ["5","3",".",".","7",".",".",".","."],
//           ["6",".",".","1","9","5",".",".","."],
//           [".","9","8",".",".",".",".","6","."],
//           ["8",".",".",".","6",".",".",".","3"],
//           ["4",".",".","8",".","3",".",".","1"],
//           ["7",".",".",".","2",".",".",".","6"],
//           [".","6",".",".","4",".","2","8","."],
//           [".",".",".","4","1","9",".",".","5"],
//           [".",".",".",".","8",".",".","7","9"]
//         ],
//         result: false
//       },
//     ]
//     items.forEach(item => {
//       assert.equal(validSudoku(item.input), item.result);
//     });
//   });
// });