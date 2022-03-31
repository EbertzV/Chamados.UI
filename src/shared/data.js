import * as axios from 'axios';

const recuperarChamados = async function(){
    const response = await axios.get('http://localhost:5000/api/Chamados');
    const chamados = response.data.map(c => {
        return c;   
    })
    return chamados;
}

const recuperarTecnicos = async function(){
    const response = await axios.get('http://localhost:5000/api/Tecnicos');
    console.log(response.data);
    const tecnicos = response.data.tecnicos.map(t => {
        return t;
    });
    return tecnicos;
}

export const data = {
    recuperarChamados,
    recuperarTecnicos
}