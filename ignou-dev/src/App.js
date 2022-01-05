import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Homepage from '../../ignou-dev/src/pages/homepage/homepage.jsx'
import Error from './pages/collection/Error';
import About from './pages/collection/About';
import Contact from './pages/collection/Contact';
import Company from './pages/collection/Company';
import Team from './pages/collection/Team';



class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/' element={< Homepage />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
                 <Route exact path='/company' element={< Company />}></Route>
                 <Route exact path='/team' element={< Team />}></Route>
                 <Route element={< Error />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
 
export default App;

// const  App=() =>{
//   return (
//   <>
//     <Routes>
//     <Route exact path="/" element={<Homepage/>}/>
//     <Route path="*" element={<Error/>}/>
//     </Routes>
//      </>
//   );
// }

// export default App;


