import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Notifications from './components/Notification/Notifications';
import Options from './components/Options/Options';
import Compiler from './components/Compiler/Compiler';


const App = () => {
  return (
    <div className='flex w-full min-h-screen'>
      <div className='w-1/3 p-2'>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </div>
      <div className='w-2/3'>
        <Compiler />
      </div>
    </div>
  );
}

export default App;
