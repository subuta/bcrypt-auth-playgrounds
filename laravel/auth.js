import bcrypt from 'bcrypt'

import knex from 'knex'
import assert from 'assert'

import connection from './knexfile'

const db = knex(connection)

const main = async () => {
  const user = await db.select('*')
    .from('users')
    .where({ email: 'hoge@piyo.com' })
    .first()

  // SEE: https://angristan.xyz/comparing-bcrypt-hash-between-php-and-node-js/
  // See https://en.wikipedia.org/wiki/Bcrypt#Versioning_history
  const password = user.password.replace('$2y$', '$2a$');

  const authenticated = await bcrypt.compare('password', password)

  try {
    assert(authenticated, 'UnAuthorized!')
    console.log('authenticated =', authenticated)
  } finally {
    await db.destroy()
  }
}

main()
