import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import React, {
  useEffect,
  useState
} from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import Card from "./card";
import Image from "../../assets/assignment.jpeg"
import "./cards-style.css"

class TodoApp extends React.Component {
    constructor() {
      super();
      this.state = {
        todos: ['a','b','c','d','e','f','g','h','i','j','k'],
        currentPage: 1,
        todosPerPage: 3
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
      this.setState({
        currentPage: Number(event.target.id)
      });
    }

    render() {
      const { todos, currentPage, todosPerPage } = this.state;

      // Logic for displaying current todos
      const indexOfLastTodo = currentPage * todosPerPage;
      const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

      const renderTodos = currentTodos.map((todo, index) => {
        return <li key={index}>{todo}</li>;
      });

      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
        pageNumbers.push(i);
      }

      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </li>
        );
      });

      return (
        <div>
          <ul>
            {renderTodos}
          </ul>
          <ul id="page-numbers">
            {renderPageNumbers}
          </ul>
        </div>
      );
    }
  }
// class Cards extends React.Component{
    
//     render()
//     {
//         return(
//             <div className="container-fluid d-flex justify-ontent-center">
//                 <div className="row">
//                     <div className="col-md-4"><Card imgsrc={Image} title="Aman"/></div>
//                     <div className="col-md-4"><Card imgsrc={Image}/></div>
//                     <div className="col-md-4"><Card imgsrc={Image}/></div>
//                     <div className="col-md-4"><Card imgsrc={Image} title="Aman"/></div>
//                     <div className="col-md-4"><Card imgsrc={Image}/></div>
//                     <div className="col-md-4"><Card imgsrc={Image}/></div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Cards;

export default TodoApp;
