import React from 'react';

class BuilingList extends React.Component {
	render() {
		return (
			<div>
				{this.props.data
				.filter(d => d.name.toLowerCase().startsWith(this.props.filterText.toLowerCase()))
				.map(directory => {
					return (
						<tr key={directory.id}>
							<td onClick={() => this.props.selectedUpdate(directory.id)}>{directory.code} </td>
							<td onClick={() => this.props.selectedUpdate(directory.id)}> {directory.name} </td>
							<td onClick={() => this.props.removeBuildingFromData(directory.id)}>-</td>
						</tr>
					)
				})}
			</div>
		)
	}
}
export default BuilingList;
