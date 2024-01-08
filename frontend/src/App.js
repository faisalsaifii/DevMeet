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
    <>
      {
        showInfo && <Info setShowInfo={setShowInfo} />
      }
      <NavBar setShowInfo={setShowInfo} />
      <div className='flex h-full pt-10'>
        <div className='overflow-scroll w-1/4 pt-2 pl-2 pb-2'>
          <VideoPlayer />
          <Options>
            <Notifications />
          </Options>
        </div>
        <div className='w-3/4'>
          <Compiler />
        </div>
      </div>
    </>
  );
}

export default App;
