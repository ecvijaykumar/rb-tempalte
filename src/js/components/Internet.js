import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import CommunicationCall from 'material-ui/lib/svg-icons/communication/call';
import CommunicationChatBubble from 'material-ui/lib/svg-icons/communication/chat-bubble';
import Colors from 'material-ui/lib/styles/colors';
import CommunicationEmail from 'material-ui/lib/svg-icons/communication/email';

class Internet extends Component {
	componentDidMount() {
	}
	render() {
		return(
			<Paper>
				<h2>Internet - Solar Net</h2>
				<List>
				<ListItem
			leftIcon={<CommunicationCall color={Colors.indigo500} />}
			rightIcon={<CommunicationChatBubble />}
			primaryText="(650) 555 - 1234"
			secondaryText="Mobile"
				/>
				<ListItem
			insetChildren={true}
			rightIcon={<CommunicationChatBubble />}
			primaryText="(323) 555 - 6789"
			secondaryText="Work"
				/>
				</List>
				<Divider inset={true} />
				<List>
				<ListItem
			leftIcon={<CommunicationEmail color={Colors.indigo500} />}
			primaryText="erchakravarthy"
			secondaryText="Username"
				/>
				<ListItem
			insetChildren={true}
			primaryText="ali_connors@example.com"
			secondaryText="Work"
				/>
				</List>
				</Paper>
		)
	}
}

export default Internet

