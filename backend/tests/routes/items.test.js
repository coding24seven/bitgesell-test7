const request = require('supertest');
const app = require('../../src/index')
const dataFileContent = require('../../../data/items.json')

describe('GET', () => {
  it('returns all items', async () => {
    const response = await request(app)
        .get('/api/items')
    expect(response.status).toEqual(200);
    expect(response.body.items).toEqual(dataFileContent);
  });

  it('returns item by id', async () => {
    const itemId = 5
    const itemFromFile = dataFileContent.find(({ id }) => id === itemId)

    const response = await request(app)
        .get(`/api/items/${itemId}`)
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(itemFromFile);
  });

  it('returns 404 for non-existing item', async () => {
    const itemId = 999999999

    const response = await request(app)
        .get(`/api/items/${itemId}`)
    expect(response.status).toEqual(404);
  });
});

describe('POST', () => {
  it('creates new item', async () => {
    const bicycle = { name: 'bicycle', category: 'vehicle', price: 943 }

    const response = await request(app)
        .post(`/api/items`)
        .send(bicycle)
    expect(response.status).toEqual(201);
    expect(response.body).toEqual(expect.objectContaining({
      ...bicycle,
      id: expect.any(Number),
    }));
  });
})
