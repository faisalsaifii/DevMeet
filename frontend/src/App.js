import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Notifications from './components/Notification/Notifications';
import Options from './components/Options/Options';
import Compiler from './components/Compiler/Compiler';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import Info from './components/Info';


const App = () => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <div className='flex flex-col h-full'>
      {
        showInfo && <Info setShowInfo={setShowInfo} />
      }
      <NavBar setShowInfo={setShowInfo} />
      <div className='flex w-full h-full'>
        <div className='w-1/3 pt-2 pl-2 pb-2'>
          <VideoPlayer />
          <Options>
            <Notifications />
          </Options>
        </div>
        <div className='w-2/3'>
          <Compiler />
        </div>
      </div>
    </div>
  );
}

export default App;
