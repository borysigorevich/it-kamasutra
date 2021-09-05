import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (event) => {
        setStatus(event.target.value)
    }

    return (
        <>
            <div>
                {!editMode
                    ? <span onDoubleClick={activateEditMode}>{props.status || '------'}</span>
                    : <input onChange={onStatusChange}
                             autoFocus={true}
                             type="text"
                             value={status}
                             onBlur={deactivateEditMode}/>}
            </div>
        </>
    );
};

export default ProfileStatusWithHooks;