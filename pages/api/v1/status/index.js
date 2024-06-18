import database from 'infra/database';

async function status(request, responde) {
  const databaseName = process.env.POSTGRES_DB;

  const updateAt = new Date().toISOString();
  const databaseVersionResult = await database.query('SHOW server_version;');
  const databaseVersionValue =
    await databaseVersionResult.rows[0].server_version;

  //const databaseStatusResult = await database.query("SHOW server_status;");
  //const statusDatabase = await databaseStatusResult.rows[0].server_status;

  const databaseMaxConectionsResult = await database.query(
    'SHOW max_connections;'
  );
  const databaseMaxConectionsValue =
    await databaseMaxConectionsResult.rows[0].max_connections;

  const databaseOpenedConectionsResult = await database.query({
    text: 'SELECT count(*)::int FROM pg_stat_activity WHERE datname=$1;',
    values: [databaseName],
  });
  const databaseOpenedConectionsValue =
    await databaseOpenedConectionsResult.rows[0].count;

  responde.status(200).json({
    updated_at: updateAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        status: 'healthy',
        max_connections: parseInt(databaseMaxConectionsValue),
        opened_connections: databaseOpenedConectionsValue,
      },
    },
  });
}

export default status;
