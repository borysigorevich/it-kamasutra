import React from 'react';

class ProfileStatus extends React.Component {

    // statusInputRef = React.createRef()

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    // toggleEditMode = () => {
    //
    //     this.setState({
    //         editMode: !this.state.editMode
    //     })
    // }

    render() {
        return <>
            <div>
                {!this.state.editMode ?
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '------'}</span> :
                    <input onChange={this.onStatusChange} autoFocus={true} type="text" value={this.state.status}
                           onBlur={this.deactivateEditMode}/>}
            </div>
        </>
    }
}

export default ProfileStatus