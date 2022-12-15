import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Logout from './components/logout';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
const clientId = "479384257497-v6jverhaqhe76jbo0l6oiifspkavmfdk.apps.googleusercontent.com";

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId, scope: ""
      })
    };
    gapi.load('client:auth2', start)
  })

  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
