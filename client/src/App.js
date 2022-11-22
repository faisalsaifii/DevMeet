import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Notifications from './components/Notification/Notifications';
import Options from './components/Options/Options';
import Compiler from './components/Compiler/Compiler';

import './App.css'

function App() {
  return (
    <div className="App">
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
      <Compiler />
    </div>
  );
}

export default App;
