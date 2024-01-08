const CodeInput = ({ code, setCode }) => {

    const handleTabInput = (e) => {
        if (e.keyCode === 9) {
            e.preventDefault();
            setCode(code + '\t')
            return false;
        }
    }

    return (
        <textarea
            name='solution'
            id='source'
            onChange={e => setCode(e.target.value)}
            className='rounded-b-md dark:bg-slate-900 focus:outline-none p-2 pl-3 font-mono text-s font-thin h-full'
            value={code}
            onKeyDown={e => handleTabInput(e)}
        ></textarea>
    )
}

export default CodeInput