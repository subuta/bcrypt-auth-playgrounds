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

  const authenticated = await bcrypt.compare('password', user.encrypted_password)

  try {
    assert(authenticated, 'UnAuthorized!')
    console.log('authenticated =', authenticated)
  } finally {
    await db.destroy()
  }
}

main()
