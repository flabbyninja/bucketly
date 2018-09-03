import React, {Component} from 'react';

class FileBrowser extends Component {
    render() {

        const sampleFiles = [
            'file1',
            'file2',
            'file3',
            'file4',
            'file5'
        ];

        return (
            <div className="TreeBrowser">
                <h3>Files</h3>
                <ul>
                    {sampleFiles.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
        );
    }
};

export default FileBrowser;
