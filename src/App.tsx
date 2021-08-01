import React, {useState} from 'react';

function App() {
    const [inProgress, setInProgress] = useState(false);
    const onClick = (event: React.MouseEvent<HTMLInputElement>) => {
        try {
            event.preventDefault()
            console.log('Coming soon')
            setInProgress(true)
        } finally {
            setInProgress(false)
        }
    }
    return (
        <div className="container section">
            <form>
                <div className="row">
                    <div className="twelve columns">
                        <input type="text" placeholder="https://google.com" disabled={inProgress}/>
                        {' '}
                        <input className="button" type="submit" value="Shorten" disabled={inProgress}
                            onClick={onClick}/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default App;
