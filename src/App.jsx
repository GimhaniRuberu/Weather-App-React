import App2 from './App2'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App2/>}></Route>
          {/* <Route path='/app3' element={<App3/>}></Route> */}
          {/* <Route path='/apointment' element={<Appoinment/>}></Route>
          <Route path='/addPet' element={<AddPet/>}></Route>
          <Route path='/addPetDetails' element={<PetDetails/>}></Route>
          <Route path='/customerLogin' element={<Customerlogin/>}></Route>
          <Route path='/customerSignUp' element={<Customersignup/>}></Route>
          <Route path='/vaccination' element={<Vacination/>}></Route>
          <Route path='/eBook' element={<Ebook />}></Route>
          <Route path='/staff' element={<Staff />}></Route> */}
        </Routes>
      </BrowserRouter>
  
    )
  }
  export default App;