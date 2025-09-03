const { somarDoisNumeros } = require('../src/calculadora');
const { expect } = require('chai');

describe('Testes da Função de Soma', function() {
    it('A função deve ser capaz de somar dois números positivos', function(){
        // Coleta o resultado da unção
        const resultadoDaSoma = somarDoisNumeros(6, 12);
        // Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(18)
    });

    it('A função deve ser capaz de somar um número positivo e um negativo', function(){
        const resultadoDaSoma = somarDoisNumeros (-3, 8);
        expect(resultadoDaSoma).to.equal(5)
    });
});