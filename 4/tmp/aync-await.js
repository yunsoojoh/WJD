/**
 * 1. Note ID를 가져온다 (1초) => getNoteID
 * 2. Note ID를 통해 Note를 가져온다 (2초)
 * 3. 가져온 Note를 console.log로 찍는다.
 * */

const getNoteID = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
          return 1; // id = 1
        } , 1000);
    }
};

const getNote = () => {
  setTimeout(() => onGetNote("노트"), 2000);
};

const showNote = (message) => {
  console.log(message);
}


const func = async () =>{
  const id = await getNoteID();
  const note = await getNote(id);
  showNote(note);
};

func();
