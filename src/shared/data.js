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
    const tecnicos = response.data.tecnicos.map(t => {
        return t;
    });
    return tecnicos;
}

const recuperarChamado = async function(id){
    const response = await axios.get('http://localhost:5000/api/Chamados/' + id + '/Detalhes');
    return response.data;
}

export const data = {
    recuperarChamados,
    recuperarTecnicos,
    recuperarChamado
}