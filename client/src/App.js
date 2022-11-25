import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Notifications from './components/Notification/Notifications';
import Options from './components/Options/Options';
import Compiler from './components/Compiler/Compiler';

import './App.css'

function App() {
  return (
    <div className='main'>
      <div className='left'>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </div>
      <div className='right'>
        <Compiler />
      </div>
    </div>
  );
}

export default App;
