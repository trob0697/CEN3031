import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filterText: '',
      selectedBuilding: null
    }
  }

  componentWillMount(){
    this.setState({
      ...this.state,
      data: this.props.data
    })
  }

  filterUpdate = (event) => {
		this.setState({...this.state, filterText: event.target.value});
	}

  selectedUpdate = (id) => {
    this.setState({...this.state, selectedBuilding: id});
  }

  addBuildingToData = (x, y) => {
    let newBuilding = {
      id: this.state.data.length,
      code: x,
      name: y
    }
    if(x && y){
      this.setState({
        ...this.state,
        data: this.state.data.concat([newBuilding])
      })
    }
  }
  removeBuildingFromData = (index) => {
    let newData = this.state.data.filter((directory, indx) => indx !== index)
    this.setState({
      ...this.state,
      data: newData,
      selectedBuilding: null
    })
  }

  render() {
    return (
      <div className="bg">
        <div className="row">
          <h1 style={{marginLeft: 25}}>UF Directory App</h1>
        </div>
        <Search filterText={this.state.filterText} filterUpdate={this.filterUpdate}/>
        <AddBuilding addBuildingToData={this.addBuildingToData}/>
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList data={this.state.data} filterText={this.state.filterText} selectedUpdate={this.selectedUpdate} removeBuildingFromData={this.removeBuildingFromData}/>
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding data={this.state.data} selectedBuilding={this.state.selectedBuilding}/>
            </div>
          </div>
          <Credit/>
        </main>
      </div>
    );
  }
}

export default App;
