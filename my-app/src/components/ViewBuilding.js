import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		return (
			<div>
				<p>
				{this.props.data[this.props.selectedBuilding] && this.props.data[this.props.selectedBuilding].address
				? 
					<i>{this.props.data[this.props.selectedBuilding].name + ': ' + this.props.data[this.props.selectedBuilding].address}</i>
				:
				this.props.data[this.props.selectedBuilding] && !this.props.data[this.props.selectedBuilding].address 
				?
					<i>{this.props.data[this.props.selectedBuilding].name + ': N/A'}</i>
				:
					<i>Click on a name to view more information</i>
				}
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
