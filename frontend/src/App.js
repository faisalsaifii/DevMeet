import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Notifications from './components/Notification/Notifications';
import Options from './components/Options/Options';
import Compiler from './components/Compiler/Compiler';
import NavBar from './components/NavBar/NavBar';
import { useContext, useState } from 'react';
import Info from './components/Info';
import { SocketContext } from './Context';


const App = () => {
  const { currentWindow } = useContext(SocketContext);
  const [showInfo, setShowInfo] = useState(false)
  return (
    <>
      {
        showInfo && <Info setShowInfo={setShowInfo} />
      }
      <NavBar setShowInfo={setShowInfo} />
      <div className={`flex h-full pt-10`}>
        <div className={`overflow-scroll ${currentWindow === 'meet' ? 'w-full pt-0 p-2' : currentWindow === 'both' ? 'w-3/4 pl-2' : 'hidden'}`}>
          <VideoPlayer />
          <Options />
        </div>
        <div className={`${currentWindow === 'code' ? 'w-full' : currentWindow === 'both' ? 'w-3/4' : 'hidden'}`}>
          <Compiler />
        </div>
        <Notifications />
      </div>
    </>
  );
}

export default App;
