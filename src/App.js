import { useEffect, useState } from 'react';
import './App.css';
import TodoWrapper from './Components/TodoWrapper';
import { v4 as uuidv4 } from 'uuid';

/*
const INITIAL_STATE = [
  { id: uuidv4(), desc: "beni ara!", isCompleted: false, isEditing: false },
  { id: uuidv4(), desc: "seni ara!", isCompleted: false, isEditing: false },
  { id: uuidv4(), desc: "onu ara!", isCompleted: true, isEditing: false },
  { id: uuidv4(), desc: "onları ara!", isCompleted: false, isEditing: false },
  { id: uuidv4(), desc: "şunları ara!", isCompleted: true, isEditing: false }
]; 
*/

function App() {
  return (
    /* tasks={INITIAL_STATE} BAŞLANGIÇ DEĞERLERİ YUKARIDAKİLER VERİLDİ ÇALIŞMAYI İZLEMEK İÇİN  */
    <>
      <TodoWrapper />
    </>
  );
}

export default App;
