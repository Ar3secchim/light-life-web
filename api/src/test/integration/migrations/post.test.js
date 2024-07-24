import database from 'infra/database';

beforeAll(clearDatabase);
async function clearDatabase() {
  await database.query('drop schema public cascade; create schema public');
}

describe('should to request /api/v1/migrations', () => {
  test('POST return array migrations pedents', async () => {
    const response = await fetch('http://localhost:3000/api/v1/migrations', {
      method: 'POST',
    });
    const responseBody = await response.json();

    expect(response.status).toBe(201);
    expect(responseBody.length).toBeGreaterThan(0);
  });

  test('POST expect array migrations empty with status 200', async () => {
    const response = await fetch('http://localhost:3000/api/v1/migrations', {
      method: 'POST',
    });
    const responseBody = await response.json();

    expect(response.status).toBe(200);
    expect(responseBody.length).toBe(0);
  });

  test('POST return status 200', async () => {
    const response = await fetch('http://localhost:3000/api/v1/migrations', {
      method: 'POST',
    });
    expect(response.status).toBe(200);
  });
});
