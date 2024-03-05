import VideoPlayer from "./VideoPlayer/VideoPlayer";
import Notifications from "./Notification/Notifications";
import Options from "./Options/Options";
import Compiler from "./Compiler/Compiler";
import NavBar from "./NavBar/NavBar";
import Info from "./Info";
import { useContext, useState } from "react";
import { SocketContext } from "../Context";
import React from "react";

function Meet() {
  const { currentWindow } = useContext(SocketContext);
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      {showInfo && <Info setShowInfo={setShowInfo} />}
      <NavBar setShowInfo={setShowInfo} />
      <div className={`flex h-full pt-14`}>
        <div
          className={`relative overflow-scroll pt-1 ${
            currentWindow === "meet"
              ? "w-full px-2"
              : currentWindow === "both"
              ? "w-1/4 pl-2"
              : "hidden"
          }`}
        >
          <VideoPlayer />
          <Options />
        </div>
        <div
          className={`pt-1 ${
            currentWindow === "code"
              ? "w-full"
              : currentWindow === "both"
              ? "w-3/4"
              : "hidden"
          }`}
        >
          <Compiler />
        </div>
        <Notifications />
      </div>
    </>
  );
}

export default Meet;
