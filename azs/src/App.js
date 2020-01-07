import React, {Component} from 'react';
import MotoristaEdit from './components/motoristas/motoristaPage';
import VeiculosEdit from './components/veiculos/veiculosPage';
import ViagemEdit from './components/viagem/viagensPage';
import Home from './components/inicial/inicial';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/motorista' exact={true} component={MotoristaEdit}/>
          <Route path='/motorista/:id' component={MotoristaEdit}/>
          <Route path='/veiculo' exact={true} component={VeiculosEdit}/>
          <Route path='/veiculo/:id' component={VeiculosEdit}/>
          <Route path='/viagem' exact={true} component={ViagemEdit}/>
          <Route path='/viagem/:id' component={ViagemEdit}/>
        </Switch>
      </Router>
    )
  }
}

export default App;