import { Editor } from '@monaco-editor/react';
import { useContext } from 'react';
import { SocketContext } from '../Context';

const CodeEditor = ({ value, onChange, language }) => {
	const { editorTheme, editorFontSize } = useContext(SocketContext);

	return (
		<div className='flex h-full p-1 bg-white dark:bg-neutral-900 rounded-b-md'>
			<Editor
				language={language}
				theme={editorTheme}
				value={value}
				options={{
					selectOnLineNumbers: true,
					colorDecorators: true,
					fontSize: editorFontSize,
				}}
				onChange={onChange}
			/>
		</div>
	);
};

export default CodeEditor;
