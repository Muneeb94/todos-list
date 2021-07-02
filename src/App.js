import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';


function App() {
   const todoItem = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go  to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go  to the market to get this job done2"
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "You need to go  to the market to get this job done3"
    },
   ]

  return (
    <div>
        <Header title="My ToDo List"/>
        <Todos  todoItems = {todoItem}/>
        <Footer />
    </div>
  );
}

export default App;
