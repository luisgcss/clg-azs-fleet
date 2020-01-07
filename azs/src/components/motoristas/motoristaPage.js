import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from '../comum/appbar';
import Motorista from './motoristas';

class MotoristaEdit extends Component {
    emptyItem = {
        nome: '',
        cpf: '',
        dataNascimento: '',
        sexo: '',
        categoria: '',
        numerocnh: '',
        data_expedicaocnh: '',
        data_validadecnh: '',
    };
    // state = {
    //     motoristas: [],
    //     veiculos: []
    // };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem,
            motoristas: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== undefined) {
            try {
                const group = await (await fetch(`/api/motorista/${this.props.match.params.id}`)).json();
                this.setState({item: group});
            } catch (error) {
                this.props.history.push('/');
            }
        }
        const response = await fetch('http://localhost:9090/api/motoristas');
        const body = await response.json();
        this.setState({ motoristas: body});
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
        // const {item} = this.state.item;
        let item = {...this.state.item};
        console.log(item);
        await fetch('http://localhost:9090/api/cadmotorista', {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/motorista');
    }
    

    render() {
        const {item} = this.state;
        const title = <h2 className="title">{item.id ? 'Editar Motorista' : 'Cadastrar Motorista'}</h2>;
        const botao = item.id ? "Editar": "Cadastrar"
        return <div>
        <AppNavbar/>
        <Container>
            <div className="border">
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="nome">Nome</Label>
                        <Input type="text" name="nome" id="nome" value={item.nome || ''}
                            onChange={this.handleChange} autoComplete="nome"/>
                    </FormGroup>
                    {/* <FormGroup>
                        <Label for="address">Address</Label>
                        <Input type="text" name="address" id="address" value={item.address || ''}
                            onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="text" name="city" id="city" value={item.city || ''}
                            onChange={this.handleChange}/>
                    </FormGroup> */}
                    <div className="row">
                        <FormGroup className="col-md-3 mb-3">
                            <Label for="cpf">CPF</Label>
                            <Input type="text" name="cpf" id="cpf" value={item.cpf || ''}
                                    onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup className="col-md-3 mb-3">
                            <label className="my-1 mr-2" htmlFor="sexo">Sexo</label>
                            <select className="custom-select my-1 mr-sm-2" id="sexo" value={this.state.motoristas["sexo"]} onChange={this.handleChange} name="sexo">
                                <option defaultValue disabled>Escolha...</option>
                                <option value="1">Masculino</option>
                                <option value="2">Feminino</option>
                            </select>
                        </FormGroup>
                        <FormGroup className="col-md-3 mb-3">
                            <Label for="dataNascimento">Data de Nascimento</Label>
                            <Input type="text" name="dataNascimento" id="dataNascimento" value={item.dataNascimento || ''}
                                    onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup className="col-md-3 mb-3">
                            <Label for="categoria">Categoria</Label>
                            <Input type="text" name="categoria" id="categoria" value={item.categoria || ''}
                                    onChange={this.handleChange}/>
                        </FormGroup>
                    </div>
                    <div className="row">
                        <FormGroup className="col-md-4 mb-3">
                            <Label for="numerocnh">Número da CNH</Label>
                            <Input type="text" name="numerocnh" id="numerocnh" value={item.numerocnh || ''}
                                    onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup className="col-md-4 mb-3">
                            <Label for="data_expedicaocnh">Data de Expedição</Label>
                            <Input type="text" name="data_expedicaocnh" id="data_expedicaocnh" value={item.data_expedicaocnh || ''}
                                    onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup className="col-md-4 mb-3">
                            <Label for="data_validadecnh">Data de Validade</Label>
                            <Input type="text" name="data_validadecnh" id="data_validadecnh" value={item.data_validadecnh || ''}
                                    onChange={this.handleChange}/>
                        </FormGroup>
                    </div>
                    <FormGroup>
                        <Button color="success" type="submit">{botao}</Button>
                        <Button color="secondary" href="/motorista">Cancelar</Button>
                    </FormGroup>
                </Form>
            </div>
            <br></br>
            <div className="border">
                <Motorista motoristas={this.state.motoristas} />
            </div>
        </Container>
        </div>
    }
}

export default withRouter(MotoristaEdit);