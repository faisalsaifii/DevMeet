import MonacoEditor from 'react-monaco-editor';

const CodeEditor = ({ code, setCode, language }) => {

    return (
        <MonacoEditor
            language={language}
            theme="vs-dark"
            className='rounded-md'
            value={code}
            options={{
                selectOnLineNumbers: true
            }}
            onChange={newValue => setCode(newValue)}
        />

    );
}

export default CodeEditor;