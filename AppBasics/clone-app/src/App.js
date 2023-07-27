import './App.css';
import Counter from './Components/Counter';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Products from './Components/Products';
import UserProfile from './Components/UserProfile';
import Form from './Components/Form';


function App() {
  return (
    
    <>
    <h1 className='greeting'>Hello World New line</h1>
    <Header/>
    <Footer/>
<UserProfile name="Kamesh" age="25" work="DE"/>
    <Counter/>
    <Products/>
    <Counter/>
    <Counter/>
    <Form/>
    </>
  );
}

export default App;
