import React from 'react'
import { Button, ButtonGroup, Container, Table } from 'reactstrap';

const Viagem = ({viagens}) => {
    return (
        <div>
            <h1>Lista de Veículo</h1>
            <br></br>
            <div>
                <table className="">
                    <thead>
                        <tr>
                            <th width="20%">Motorista</th>
                            <th width="20%">Produto</th>
                            <th width="20%">Valor</th>
                            <th width="20%">Data de Inicio</th>
                            <th width="20%">Data de Fim</th>
                            <th width="20%">Editar</th>
                            <th width="20%">Deletar</th>
                        </tr>
                    </thead>
                    <tbody>
                    {viagens.map(viagem => {
                        return <tr key={viagem.id} className="table">
                            <td>{viagem.id_motorista.nome}</td>
                            <td>{viagem.produto}</td>
                            <td>{viagem.valor}</td>
                            <td>{viagem.data_inicio}</td>
                            <td>{viagem.data_inicio}</td>
                            <td><Button size="md" color="warning" href={"/viagem/" + viagem.id}>Editar</Button></td>
                            <td><Button size="md" color="danger" href={"/viagem/" + viagem.id}>Deletar</Button></td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Viagem