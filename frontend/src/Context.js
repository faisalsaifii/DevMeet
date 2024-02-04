import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createContext();

const socket = io(process.env.REACT_APP_SERVER_URL);

const ContextProvider = ({ children }) => {
	const [callAccepted, setCallAccepted] = useState(false);
	const [callEnded, setCallEnded] = useState(false);
	const [stream, setStream] = useState();
	const [name, setName] = useState('');
	const [call, setCall] = useState({});
	const [me, setMe] = useState('');
	const [cCode, setCCode] = useState(localStorage.getItem('c-code') || '');
	const [javaCode, setJavaCode] = useState(
		localStorage.getItem('java-code') || ''
	);
	const [pyCode, setPyCode] = useState(localStorage.getItem('py-code') || '');
	const [cppCode, setCppCode] = useState(
		localStorage.getItem('cpp-code') || ''
	);
	const [editorTheme, setEditorTheme] = useState(
		localStorage.getItem('editor-theme') || 'vs-dark'
	);
	const [editorFontSize, setEditorFontSize] = useState(
		localStorage.getItem('editor-font-size') || 18
	);
	const [currentWindow, setCurrentWindow] = useState(
		localStorage.getItem('current-window') || 'both'
	);

	const myVideo = useRef();
	const userVideo = useRef();
	const connectionRef = useRef();

	useEffect(() => {
		localStorage.setItem('editor-theme', editorTheme);
		localStorage.setItem('editor-font-size', editorFontSize);
		localStorage.setItem('current-window', currentWindow);
	}, [editorTheme, editorFontSize, currentWindow]);

	useEffect(() => console.log(pyCode), [pyCode]);

	useEffect(() => {
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: true })
			.then((currentStream) => {
				setStream(currentStream);
				myVideo.current.srcObject = currentStream;
			})
			.catch((err) => console.log(err));

		socket.on('me', (id) => setMe(id));

		socket.on('callUser', ({ from, name: callerName, signal }) => {
			setCall({ isReceivingCall: true, from, name: callerName, signal });
		});

		socket.on('cCodeChange', ({ code }) => {
			setCCode(code);
			localStorage.setItem('c-code', code);
		});

		socket.on('cppCodeChange', ({ code }) => {
			setCppCode(code);
			localStorage.setItem('cpp-code', code);
		});

		socket.on('pyCodeChange', ({ code }) => {
			setPyCode(code);
			localStorage.setItem('py-code', code);
		});

		socket.on('javaCodeChange', ({ code }) => {
			setJavaCode(code);
			localStorage.setItem('java-code', code);
		});
	}, []);

	const handleCCodeChange = (newValue) => {
		setCCode(newValue);
		socket.emit('cCodeChange', { code: newValue });
		localStorage.setItem('c-code', newValue);
	};

	const handleCppCodeChange = (newValue) => {
		setCppCode(newValue);
		socket.emit('cppCodeChange', { code: newValue });
		localStorage.setItem('cpp-code', newValue);
	};

	const handlePyCodeChange = (newValue) => {
		setPyCode(newValue);
		localStorage.setItem('py-code', newValue);
		socket.emit('pyCodeChange', { code: newValue });
	};

	const handleJavaCodeChange = (newValue) => {
		setJavaCode(newValue);
		socket.emit('javaCodeChange', { code: newValue });
		localStorage.setItem('java-code', newValue);
	};

	const answerCall = () => {
		setCallAccepted(true);

		const peer = new Peer({ initiator: false, trickle: false, stream });

		peer.on('signal', (data) => {
			socket.emit('answerCall', { signal: data, to: call.from });
		});

		peer.on('stream', (currentStream) => {
			userVideo.current.srcObject = currentStream;
		});

		peer.signal(call.signal);

		connectionRef.current = peer;
	};

	const callUser = (id) => {
		const peer = new Peer({ initiator: true, trickle: false, stream });

		peer.on('signal', (data) => {
			socket.emit('callUser', {
				userToCall: id,
				signalData: data,
				from: me,
				name,
			});
		});

		peer.on('stream', (currentStream) => {
			userVideo.current.srcObject = currentStream;
		});

		socket.on('callAccepted', (signal) => {
			setCallAccepted(true);

			peer.signal(signal);
		});

		connectionRef.current = peer;
	};

	const leaveCall = () => {
		setCallEnded(true);

		connectionRef.current.destroy();

		window.location.reload();
	};

	return (
		<SocketContext.Provider
			value={{
				call,
				callAccepted,
				myVideo,
				userVideo,
				stream,
				name,
				setName,
				callEnded,
				me,
				callUser,
				leaveCall,
				answerCall,
				editorTheme,
				setEditorTheme,
				editorFontSize,
				setEditorFontSize,
				currentWindow,
				setCurrentWindow,
				cCode,
				setCCode,
				javaCode,
				setJavaCode,
				pyCode,
				setPyCode,
				cppCode,
				setCppCode,
				handleCCodeChange,
				handleCppCodeChange,
				handleJavaCodeChange,
				handlePyCodeChange,
			}}
		>
			{children}
		</SocketContext.Provider>
	);
};

export { ContextProvider, SocketContext };
