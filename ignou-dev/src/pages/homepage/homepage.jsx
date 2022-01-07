import React from 'react';
import ReactDOM from 'react-dom';
import MenuBar from './menubar';
//import Card from '../../components/card/card';
import Cards from '../../components/card/cards';
import Footer from '../../redux/footer/footer';

function car() {
    return (
        <>
         <MenuBar />
         <Cards itemsPerPage={4} />
         <Footer />
         </>
      );
}
export default car;

//ReactDOM.render(<Car />, document.getElementById('root'));
