import { Editor } from "@monaco-editor/react"

const CodeEditor = ({ code, setCode, language }) => {


    return (
        <div className='flex h-full p-1 bg-white dark:bg-gray-900 rounded-b-md'>
            <Editor
                language={language}
                theme='vs-dark'
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