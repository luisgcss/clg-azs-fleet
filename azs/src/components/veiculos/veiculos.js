import React from 'react'
import { Button, ButtonGroup, Container, Table } from 'reactstrap';

const Veiculo = ({veiculos}) => {
    return (
        <div>
            <h1>Lista de Veículo</h1>
            <br></br>
            <div>
                <table className="">
                    <thead>
                        <tr>
                            <th width="20%">Modelo</th>
                            <th width="20%">Tipo</th>
                            <th width="20%">Placa</th>
                            <th width="20%">Ano</th>
                            <th width="20%">Editar</th>
                            <th width="20%">Deletar</th>
                        </tr>
                    </thead>
                    <tbody>
                    {veiculos.map(veiculo => {
                        return <tr key={veiculo.id} className="table">
                            <td>{veiculo.modelo}</td>
                            <td>{veiculo.tipo}</td>
                            <td>{veiculo.placa}</td>
                            <td>{veiculo.ano}</td>
                            <td><Button size="md" color="warning" href={"/veiculo/" + veiculo.id}>Editar</Button></td>
                            <td><Button size="md" color="danger" href={"/veiculo/" + veiculo.id}>Deletar</Button></td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Veiculo