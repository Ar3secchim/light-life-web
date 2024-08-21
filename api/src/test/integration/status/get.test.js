describe('should to request /api/v1/status return status', () => {
  test('GET return status 200', async () => {
    const response = await fetch('http://localhost:3000/api/v1/status');
    expect(response.status).toBe(200);
  });

  test('should body response correct', async () => {
    const response = await fetch('http://localhost:3000/api/v1/status');

    const responseBody = await response.json();
    const parseDate = new Date(responseBody.updated_at).toISOString();
    expect(responseBody.updated_at).toBeDefined();

    expect(responseBody.updated_at).toEqual(parseDate);
    expect(responseBody.dependencies.database.version).toEqual('16.0');
    expect(responseBody.dependencies.database.status).toEqual('healthy');
    expect(responseBody.dependencies.database.max_connections).toEqual(100);
    expect(responseBody.dependencies.database.opened_connections).toEqual(1);
  });
});
