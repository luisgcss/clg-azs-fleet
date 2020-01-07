import React, { Component } from "react";
import AppNavbar from '../comum/appbar';
class Home extends Component {
    render() {
        return (
        <div>
            <AppNavbar/>
            <div className="container">
                <br></br>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Motoristas</h5>
                                <p class="card-text">Gerenciamento de Motoristas</p>
                                <a href="/motorista" class="btn btn-primary">Acessar</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Veículos</h5>
                                <p class="card-text">Gerenciamento de Veículos</p>
                                <a href="/veiculo" class="btn btn-primary">Acessar</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Viagens</h5>
                                <p class="card-text">Gerenciamento de Viagens</p>
                                <a href="/viagem" class="btn btn-primary">Acessar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    // state = {
    //     motoristas: [],
    //     veiculos: []
    // };

    // async componentDidMount() {
    //     // fetch('http://localhost:9090/api/motoristas', {mode: 'no-cors'})
    //     //     .then(res => res.json())
    //     //     .then((data) => {
    //     //         this.setState({ motoristas: data })
    //     //     })
    //     //     .catch(console.log);
    //     const response = await fetch('http://localhost:9090/api/motoristas');
    //     const body = await response.json();
    //     const res = await fetch('http://localhost:9090/api/veiculos');
    //     const data = await res.json();
    //     this.setState({ motoristas: body, veiculos: data });
    // }
}

export default Home;
