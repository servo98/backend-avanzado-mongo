import supertest from 'supertest';
import api from '../api.js';
import database from '../../config/database.js';

const agent = supertest.agent(api);
database();

test('Create Ticket', async () => {
  await agent.post('/auth/register').send({
    email: 'test@test.test',
    password: '123',
  });

  const loginResponse = await agent.post('/auth/login').send({
    email: 'test@test.test',
    password: '123',
  });

  const itemResponse = await agent
    .post('/items')
    .send({
      name: 'item test',
      price: 100,
      inventory: 10,
    })
    .set('Authorization', loginResponse.body.token);

  const response = await agent
    .post('/tickets')
    .send({
      items: [itemResponse.body.item._id],
    })
    .set('Authorization', loginResponse.body.token);

  expect(response.statusCode).toBe(200);
  expect(response.body.ticket._id).toBeTruthy();
});

test('Update Ticket', async () => {
  await agent.post('/auth/register').send({
    email: 'test@test.test',
    password: '123',
  });

  const loginResponse = await agent.post('/auth/login').send({
    email: 'test@test.test',
    password: '123',
  });

  const itemResponse = await agent
    .post('/items')
    .send({
      name: 'item test',
      price: 100,
      inventory: 10,
    })
    .set('Authorization', loginResponse.body.token);

  const responseTicket = await agent
    .post('/tickets')
    .send({
      items: [itemResponse.body.item._id],
    })
    .set('Authorization', loginResponse.body.token);

  const newItemResponse = await agent
    .post('/items')
    .send({
      name: 'item test 2',
      price: 200,
      inventory: 20,
    })
    .set('Authorization', loginResponse.body.token);

  const response = await agent
    .put(`/tickets/${responseTicket.body.ticket._id}`)
    .send({
      items: [newItemResponse.body.item._id],
    })
    .set('Authorization', loginResponse.body.token);

  expect(response.statusCode).toBe(200);
});

// test('Get all Tickets', () => {});

// test('Get ticket by id', () => {});

// test('Delete ticket', () => {});
