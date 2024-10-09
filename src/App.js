import logo from './logo.svg';
import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import 'antd/dist/reset.css';

const notify = () => toast.success('Here is your toast.');


function App() {
  return (
    <div className="App">
      <button onClick={notify}>Show Toast</button>
      <Toaster />
    </div>
  );
}

export default App;
