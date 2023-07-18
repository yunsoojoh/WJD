/**
 * 1. Note ID를 가져온다 (1초) => getNoteID
 * 2. Note ID를 통해 Note를 가져온다 (2초)
 * 3. 가져온 Note를 console.log로 찍는다.
 * */

// 이상적인 모습
const getNoteID = (onGetNoteID) => {
  setTimeout(() => {
    return 1; // id = 1
   } , 1000);
};


const getNote = (noteID) => {
  setTimeout(() => {
    return "노트1";
   } , 2000);
};

 const id = getNoteID();
 const note = getNote(id);

console.log(note);
