import * as axios from 'axios';

const recuperarChamados = async function(){
    const response = await axios.get('http://localhost:5000/api/Chamados');
    const chamados = response.data.map(c => {
        return c;   
    })
    return chamados;
}

export const data = {
    recuperarChamados
}