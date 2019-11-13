module.exports = {
  client: 'pg',
  connection: 'postgres://postgres:postgres@localhost:5432/myapp_development',
  pool: { min: 0, max: 10 }
}
