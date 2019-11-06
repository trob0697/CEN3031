import React from 'react';

class BuilingList extends React.Component {
	render() {
		return (
			<div>
				{this.props.data
				.filter(d => d.name.toLowerCase().startsWith(this.props.filterText.toLowerCase()))
				.map((directory, index) => {
					return (
						<tr>
							<td onClick={() => this.props.selectedUpdate(index)}>{directory.code} </td>
							<td onClick={() => this.props.selectedUpdate(index)}> {directory.name} </td>
							<td onClick={() => this.props.removeBuildingFromData(index)}>-</td>
						</tr>
					)
				})}
			</div>
		)
	}
}
export default BuilingList;
