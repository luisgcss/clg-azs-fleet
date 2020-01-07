// import Veiculo from './veiculos';
import AppNavbar from '../comum/appbar';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Viagem from './viagens';
class ViagemEdit extends Component {
    
    emptyItem = {
        id_motorista: "",
        id_veiculo: "",
        data_inicio: "",
        data_fim: "",
        valor: "",
        produto: "",
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem,
            viagem: [],
            veiculos: [],
            motoristas: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== undefined) {
            try {
                const group = await (await fetch(`http://localhost:9090/api/viagem/${this.props.match.params.id}`)).json();
                this.setState({item: group});
            } catch (error) {
                this.props.history.push('/');
            }
        }
        const response = await fetch('http://localhost:9090/api/viagens');
        const body = await response.json();
        
        const responseMotorista = await fetch('http://localhost:9090/api/motoristas');
        const bodyMotorista = await responseMotorista.json();

        const responseVeiculos = await fetch('http://localhost:9090/api/veiculos');
        const bodyVeiculos = await responseVeiculos.json();
        this.setState({ viagem: body, veiculos: bodyVeiculos, motoristas: bodyMotorista});
        // console.log(bodyVeiculos);
        // console.log(bodyMotorista);
        // console.log(this.state.veiculos);
        // console.log(this.state.motoristas);
        
    }
    getdate() {
        var d = new Date();
        if(d.getMonth() < 10) {
            var month = '0'+(d.getMonth()+1);
            var day = '0'+d.getDate()
        } else {
            var month = d.getMonth()+1;
            var day = d.getDate();
        }
        return d.getFullYear()+'-'+month+'-'+day
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
        
        this.state.item.data_inicio = this.getdate();
        const {item} = this.state;
        console.log(JSON.stringify(item));
        await fetch('http://localhost:9090/api/viagem', {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        console.log(JSON.stringify(item));
        this.props.history.push('/viagem');
    }
    

    render() {
        const {item} = this.state;
        const title = <h2 className="title">{item.id ? 'Editar Viagem' : 'Cadastrar Viagem'}</h2>;
        const botao = item.id ? "Editar": "Cadastrar"
        return <div>
            <AppNavbar/>
            <Container>
                <div className="border">
                    {title}
                    <Form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <FormGroup className="col-md-6 mb-3">
                                <label className="my-1 mr-2" htmlFor="id_motorista">Motorista</label>
                                <select className="custom-select my-1 mr-sm-2" id="id_motorista" value={this.state.item["motorista"]} onChange={this.handleChange} name="id_motorista">
                                    <option defaultValue>Escolha...</option>
                                    {this.state.motoristas.map(motorista => {
                                        return <option value={motorista.id}>{motorista.nome}</option>
                                    })}
                                    {/* <option value="truck">Truck</option>
                                    <option value="bitruck">Bitruck</option>
                                    <option value="cavalo">Cavalo</option>
                                    <option value="reboque">Reboque</option> */}
                                </select>
                            </FormGroup>
                            <FormGroup className="col-md-6 mb-3">
                                <label className="my-1 mr-2" htmlFor="id_veiculo">Veículo</label>
                                <select className="custom-select my-1 mr-sm-2" id="id_veiculo" value={this.state.item["veiculo"]} onChange={this.handleChange} name="id_veiculo">
                                    <option defaultValue>Escolha...</option>
                                    {this.state.veiculos.map(veiculo => {
                                        return <option value={veiculo.id}>{"Modelo: "+veiculo.modelo+" "+"Placa: "+veiculo.placa}</option>
                                    })}
                                    {/* <option value="truck">Truck</option>
                                    <option value="bitruck">Bitruck</option>
                                    <option value="cavalo">Cavalo</option>
                                    <option value="reboque">Reboque</option> */}
                                </select>
                            </FormGroup>
                        </div>
                        <div className="row">
                            <FormGroup className="col-md-6 mb-3">
                                <Label for="produto">Produto</Label>
                                <Input type="text" name="produto" id="produto" value={item.produto || ''} onChange={this.handleChange}/>
                            </FormGroup>
                            <div className="col-md-6 mb-3">
                                <Label for="valor">Valor</Label>
                                <label className="sr-only" htmlFor="valor">Valor</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">R$</div>
                                    </div>
                                    <input type="text" className="form-control" name="valor" id="valor" value={item.valor || ''} onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                        <FormGroup>
                            <Button color="success" type="submit">{botao}</Button>
                            <Button color="secondary" href="/veiculo">Cancelar</Button>
                        </FormGroup>
                    </Form>
                </div>
                <br></br>
                <div className="border">
                    <Viagem viagens={this.state.viagem} />
                </div>
            </Container>
        </div>
    }
}

export default withRouter(ViagemEdit);