import Veiculo from './veiculos';
import VeiculoComponent from './tipoVeiculoComponent';
import AppNavbar from '../comum/appbar';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

class VeiculosEdit extends Component {
    emptyItem = {
        ano: "",
        chassi: "",
        cidade: "",
        estado: "",
        fabricante: "",
        modelo: "",
        placa: "",
        renavam: "",
        tipo: "",
        subTipo: "",
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem,
            veiculos: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== undefined) {
            try {
                const group = await (await fetch(`http://localhost:9090/api/veiculo/${this.props.match.params.id}`)).json();
                this.setState({item: group});
            } catch (error) {
                this.props.history.push('/');
            }
        }
        const response = await fetch('http://localhost:9090/api/veiculos');
        const body = await response.json();
        this.setState({ veiculos: body});
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;
    
        await fetch('http://localhost:9090/api/veiculo', {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        console.log(JSON.stringify(item));
        this.props.history.push('/veiculo');
    }
    

    render() {
        const {item} = this.state;
        const title = <h2 className="title">{item.id ? 'Editar Veículo' : 'Cadastrar Veículo'}</h2>;
        const botao = item.id ? "Editar": "Cadastrar"
        return <div>
            <AppNavbar/>
            <Container>
                <div className="border">
                    {title}
                    <Form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <FormGroup className="col-md-4 mb-3">
                                <Label for="modelo">Modelo</Label>
                                <Input type="text" name="modelo" id="modelo" value={item.modelo || ''}
                                        onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup className="col-md-4 mb-3">
                                <Label for="fabricante">Fabricante</Label>
                                <Input type="text" name="fabricante" id="fabricante" value={item.fabricante || ''}
                                        onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup className="col-md-4 mb-3">
                                <Label for="chassi">Chassi</Label>
                                <Input type="text" name="chassi" id="chassi" value={item.chassi || ''}
                                        onChange={this.handleChange}/>
                            </FormGroup>
                        </div>
                        <div className="row">
                            <FormGroup className="col-md-2 mb-3">
                                <Label for="ano">Ano</Label>
                                <Input type="text" name="ano" id="ano" value={item.ano || ''}
                                        onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup className="col-md-2 mb-3">
                                <Label for="placa">Placa</Label>
                                <Input type="text" name="placa" id="placa" value={item.placa || ''}
                                        onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup className="col-md-4 mb-3">
                                <Label for="cidade">Cidade</Label>
                                <Input type="text" name="cidade" id="cidade" value={item.cidade || ''}
                                        onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup className="col-md-4 mb-3">
                                <Label for="estado">Estado</Label>
                                <Input type="text" name="estado" id="estado" value={item.estado || ''}
                                        onChange={this.handleChange}/>
                            </FormGroup>
                        </div>
                        <div className="row">
                            <FormGroup className="col-md-6 mb-3">
                                <Label for="renavam">RENAVAM</Label>
                                <Input type="text" name="renavam" id="renavam" value={item.renavam || ''}
                                        onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup className="col-md-6 mb-3">
                                <label className="my-1 mr-2" htmlFor="tipo">Tipo</label>
                                <select className="custom-select my-1 mr-sm-2" id="tipo" value={this.state.veiculos["tipo"]} onChange={this.handleChange} name="tipo">
                                    <option defaultValue>Escolha...</option>
                                    <option value="truck">Truck</option>
                                    <option value="bitruck">Bitruck</option>
                                    <option value="cavalo">Cavalo</option>
                                    <option value="reboque">Reboque</option>
                                </select>
                            </FormGroup>
                            <VeiculoComponent veiculos={this.state.item["tipo"]} handler={this.handleChange} value={this.state.veiculos["subTipo"]}/>
                        </div>
                        <FormGroup>
                            <Button color="success" type="submit">{botao}</Button>
                            <Button color="secondary" href="/veiculo">Cancelar</Button>
                        </FormGroup>
                    </Form>
                </div>
                <br></br>
                <div className="border">
                    <Veiculo veiculos={this.state.veiculos} />
                </div>
            </Container>
        </div>
    }
}

export default withRouter(VeiculosEdit);