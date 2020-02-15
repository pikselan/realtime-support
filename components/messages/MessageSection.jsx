import React, {Component} from 'react'
import MessageForm from './MessageForm.jsx'
import MessageList from './MessageList.jsx'

class MessageSection extends Component{
    render(){
        let {activeChannel} = this.props
        return (
            <div className='messages-container panel panel-default'>
                <div className='panel-heading'>
                    <strong>{activeChannel.name}</strong>
                </div>
                <div className='panel-body messages'>
                    <MessageList {...this.props} />
                    <MessageForm {...this.props} />
                </div>
            </div>
        )
    }
}

MessageSection.propTypes = {
    messages: React.PropTypes.array.isRequired,
    addMessage: React.PropTypes.func.isRequired,
    activeChannel: React.PropTypes.array.isRequired
}

export default MessageSection