import './App.css';
import Adress from './component/profile/adress';
import Photo from './component/profile/photo';
import FullName from './component/profile/fullName';

function App() {
  return (
    <div className="App">
  <FullName></FullName>
  <Photo></Photo>
  <Adress></Adress>
    </div>
  );
}

export default App;
