import React, {Component} from 'react';

class TreeBrowser extends Component {
    render() {

        const sampleDirs = [
            'dir1',
            'dir2',
            'dir3',
            'dir4',
            'dir5'
        ];

        return (
            <div className="TreeBrowser">
                <h3>Directories</h3>
                <ul>
                    {sampleDirs.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
        );
    }
}

export default TreeBrowser;
