import './App.css';
import StateLess from './StateLess'
import ButtonAppBar from './Appbar'
import Form from './Form'
import React, { useState } from 'react'
import {BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import UserList from './Users'
import ActionAreaCard from './Card';
export const users = [{
  id:1,
  firstName: "Ali",
  lastName: "Turgunov",
  image: 'https://image.benq.com/is/image/benqco/monitor-for-programmer-1?$ResponsivePreset$',
  age: 23,
  about: 'lorem nimadir nimadir'
},
{
  id:2,
  firstName: "Bek",
  lastName: "Turgunov",
  image: 'https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg',
  age: 22,
  about: 'lorem nimadir nimadir'
}
]
function App() {
  return (
  <BrowserRouter>
       <Routes>
        <Route path="/" element={ <UserList users={users}></UserList>} />
        <Route path= '/user/:id' element={<ActionAreaCard/>} />
      </Routes>
       
  </BrowserRouter>
  ) 
}

export default App;
