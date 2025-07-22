const Produto = require('../src/modules/produto/models/produtoModel');
const { sequelize } = require('../src/config/configDB');
const app = require('../../Aula06/index');
const req = require('supertest');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.close();
});

afterEach(async () => {
    await Produto.truncate();
});

describe('testes de integração - Produto', () => {
    test('POST /produtos', async () => {
        const res = await req(app).post('/produtos').send({ nome: 'Feijão', preco: 3.70, estoque: 30 });
        expect(res.status).toBe(201);
        expect(res.body.produto).toHaveProperty('cod_prod');
    });

    test('POST /produtos - Deve falhar ao criar um produto sem nome', async () => {
        const res = await req(app).post('/produtos').send({ preco: 3.70, estoque: 30 });
        expect(res.status).toBe(400);
        expect(res.body.msg).toBe('Todos os campos devem ser preenchidos!');
    });

    test('POST /produtos - Deve falhar ao criar um produto sem preço', async () => {
        const res = await req(app).post('/produtos').send({ nome: 'Feijão', estoque: 30 });
        expect(res.status).toBe(400);
        expect(res.body.msg).toBe('Todos os campos devem ser preenchidos!');
    });

    test('POST /produtos - Deve falhar ao criar um produto sem estoque', async () => {
        const res = await req(app).post('/produtos').send({ nome: 'Feijão' });
        expect(res.status).toBe(400);
        expect(res.body.msg).toBe('Todos os campos devem ser preenchidos!');
    });

    test('POST /produtos - Deve falhar ao criar um produto sem dados', async () => {
        const res = await req(app).post('/produtos').send({});
        expect(res.status).toBe(400);
        expect(res.body.msg).toBe('Todos os campos devem ser preenchidos!');
    });

    test('POST /produtos - Deve falhar ao criar um produto com preço negativo ', async()=>{
        const res = await req(app).post('/produtos').send({nome: 'Feijão', preco: -5.50, estoque: 30});
        expect(res.status).toBe(400);
        expect(res.body.msg).toBe('Dados inválidos!');
    })
    test('POST /produtos - Deve falhar ao criar um produto com estoque negativo ', async()=>{
        const res = await req(app).post('/produtos').send({nome: 'Feijão', preco: 5.50, estoque: -30});
        expect(res.status).toBe(400);
        expect(res.body.msg).toBe('Dados inválidos!');
    })
    test('POST /produtos - Deve falhar ao criar um produto com nome diferente de String', async()=>{
        const res = await req(app).post('/produtos').send({nome: 8, preco: 5.50, estoque: 30});
        expect(res.status).toBe(400);
        expect(res.body.msg).toBe('Dados inválidos!');
    })
    test('POST /produtos - Deve falhar ao criar um produto com preço diferente de number', async()=>{
        const res = await req(app).post('/produtos').send({nome: 'Feijão', preco: '5.50', estoque: 30});
        expect(res.status).toBe(400);
        expect(res.body.msg).toBe('Dados inválidos!');
    })
    test('POST /produtos - Deve falhar ao criar um produto com estoque diferente de number', async()=>{
        const res = await req(app).post('/produtos').send({nome: 'Feijão', preco: 5.50, estoque: '30'});
        expect(res.status).toBe(400);
        expect(res.body.msg).toBe('Dados inválidos!');
    })
    test('POST /produtos - Deve falhar ao criar um produto com estoque igual a 0', async()=>{
        const res = await req(app).post('/produtos').send({nome: 'Feijão', preco: 5.50, estoque: 0});
        expect(res.status).toBe(400);
        expect(res.body.msg).toBe('Todos os campos devem ser preenchidos!');
    })



    //TDD Listar Produtos
describe('Testes de integração - Produto Listar', ()=>{
    //verificar se a rota está funcionando - status 200
    

})
});
