import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Footer from './components/Footer'
import Contact from './Pages/Contact'
 
const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      
      <Footer />
    </div>

  )
}

export default App;





//Image
// import React from 'react'
// const Image = ({src, alt, className, id}) => {
//   return (
//     <>
//       <img src={src} alt={alt} className={className} id={id}/>
//     </>
//   )
// }
// export default Image


// Link button
// import React from "react";
// const LinkButton = (props) => {
//   return (
//     <div className="links">
//       <h2>{props.name}</h2>
//     </div>
//   )
// }
// export default LinkButton; 