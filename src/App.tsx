import React from 'react';

function App() {
    return (
        <div className="container">
            <form style={{marginTop: '40%'}}>
                <div className="row">
                    <div className="twelve columns center">
                        <input type="text" placeholder="URL"/>
                        {' '}
                        <input className="button-primary" type="submit" value="Shorten"/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default App;
