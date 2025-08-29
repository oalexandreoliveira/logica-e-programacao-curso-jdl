function somarDoisNumeros (v1, v2){
    // receba dois números e faça a adição
    const resultado = v1 + v2;
    return resultado;
}

function calcularMediaDoisNumeros (v1, v2) {
    //soma todos os valores
    const resultadoSomaDoisValores = somarDoisNumeros(v1, v2);
    //divide pela qtd de números passados
    const resultadoMediaDoisValores =  resultadoSomaDoisValores / 2;
    //retorna o resultado
    return resultadoMediaDoisValores;
};

module.exports = {
    somarDoisNumeros
}