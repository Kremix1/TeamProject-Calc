import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import NavbarLeft from './Components/Navbar';
import Header from './Components/Header';
import Calculate from './Components/Calculate';
import Analyzer from './Components/Analyzer';

function App() {
  return (
    <>
      <div className='wrapper'>
        <NavbarLeft />
        <div className='wrapper__content'>
          <Header />
          <div className="wrapper__inner-content">
            <p><a href="#" className='inner-content__link'>Список проектов</a> {'>'}  21/ЛКП-1579-2022. Создание калькулятора оценок в Teamproject 2  (2)</p>
            <Calculate />
            <Analyzer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
