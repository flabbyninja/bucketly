import React, {Component} from 'react';

class FileBrowser extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h3>Heading 1</h3>
                        <p>Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah</p>
                        <p><a href="#" class="btn btn-default btn-lg">More...</a></p>
                    </div>
                    <div className="col-md-8">
                        <h3>Heading 2</h3>
                        <p>Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah</p>
                        <p><a href="#" className="btn btn-default btn-lg">More...</a></p>
                    </div>
                </div>
            </div>
        );
    }
};

export default FileBrowser;
