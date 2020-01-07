import React from 'react'
import { FormGroup } from 'reactstrap';
import VeiculosEdit from './veiculosPage';

const VeiculoComponent = ({veiculos, handler, value}) => {
    if (veiculos == "cavalo") {
        return (
            <FormGroup className="col-md-12 mb-3">
                <label className="my-1 mr-2" htmlFor="subTipo">Tipo de Cavalo</label>
                <select className="custom-select my-1 mr-sm-2" id="subTipo" name="subTipo" value={value} onChange={handler}>
                    <option defaultValue>Escolha...</option>
                    <option value="simples">Simples</option>
                    <option value="truncado">Truncado</option>
                </select>
            </FormGroup>
        )
    } else if(veiculos == "reboque") {
        return (
            <FormGroup className="col-md-12 mb-3">
                <label className="my-1 mr-2" htmlFor="subTipo">Tipo de Reboque</label>
                <select className="custom-select my-1 mr-sm-2" id="subTipo" name="subTipo" value={value} onChange={handler}>
                    <option defaultValue>Escolha...</option>
                    <option value="bau">Baú</option>
                    <option value="sider">Sider</option>
                    <option value="gradeBaixa">Grade baixa</option>
                    <option value="bauFrigorifico">Baú Frigorífico</option>
                    <option value="tanque">Tanque</option>
                </select>
            </FormGroup>
        )
    } else {
        return <div></div>
    }
};

export default VeiculoComponent