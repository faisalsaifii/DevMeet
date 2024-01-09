import { Editor } from "@monaco-editor/react"
import { useContext } from "react";
import { SocketContext } from "../Context";

const CodeEditor = ({ code, setCode, language }) => {
    const { editorTheme } = useContext(SocketContext);

    return (
        <div className='flex h-full p-1 bg-white dark:bg-gray-900 rounded-b-md'>
            <Editor
                language={language}
                theme={editorTheme}
                value={code}
                options={{
                    selectOnLineNumbers: true,
                    colorDecorators: true
                }}
                onChange={newValue => setCode(newValue)}
            />
        </div>
    );
}

export default CodeEditor;