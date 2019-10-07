import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = ( ) => {
    const actions = (
        <React.Fragment>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </React.Fragment>
    )

    return (
    <Modal
        onDismiss={()=> history.push('/')}
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
    />
     );
};

export default StreamDelete;