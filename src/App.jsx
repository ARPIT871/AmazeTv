
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './Index.css'
import ShowList from './components/ShowList'
import ShowDetails from './components/ShowDetails'
import MovieBookingForm from "./components/MovieBookingForm"


function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<ShowList/>}/>
    <Route path='/show/:id' element={<ShowDetails/>}/>
    <Route path="/booking/:id/:showName" element={<MovieBookingForm/>} />
  </Routes>
  </BrowserRouter>
  )
}

export default App
