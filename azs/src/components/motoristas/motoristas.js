import React from 'react'
import { Button, ButtonGroup, Container, Table } from 'reactstrap';

const Motorista = ({motoristas}) => {
    return (
        <div>
            <h1>Lista de Motorista</h1>
            <br></br>
            <div>
                <table className="">
                    <thead>
                        <tr>
                            <th width="20%">Nome</th>
                            <th width="20%">CPF</th>
                            <th width="20%">Sexo</th>
                            <th width="20%">Categoria</th>
                            <th width="20%">Editar</th>
                            <th width="20%">Deletar</th>
                        </tr>
                    </thead>
                    <tbody>
                    {motoristas.map(motorista => {
                    // {groupList}
                        const sexo = (motorista.sexo == 1) ? "Masculino" : "Feminino"
                        
                        return <tr key={motorista.id} className="table">
                            <td>{motorista.nome}</td>
                            {/* <td>{address}</td> */}
                            <td>{motorista.cpf}</td>
                            <td>{sexo}</td>
                            <td>{motorista.categoria}</td>
                            <td><Button size="md" color="warning" href={"/motorista/" + motorista.id}>Editar</Button></td>
                            <td><Button size="md" color="danger" href={"/motorista/" + motorista.id}>Deletar</Button></td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Motorista