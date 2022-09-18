import './App.css';
import FullName from './profile/FullName';
import Bio from './profile/Bio';
import Profession from './profile/Profession';
import ma from './ma.jpg'

function App() {
  const handleEvent = (name) => {
    alert(name);
  };
  return (
    <>
    <div>
    <h1>Self-Profile </h1>
      <FullName firstName="Mariem" lastName="Belhadj" name={handleEvent}/>
      <br/>
      <div>
      <Bio  age="21"  leisure={" Playing Violin, Watching TV , Eating and Sleeping"}>
        <img src={ma} style={{width:'100px', height:'100px'}}/>
        </Bio>
      </div>
      <br/>
      <div><Profession/></div>
      
    </div>
    
    </>
  );
}
export default App;