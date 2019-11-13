# rails-devise example

### How to setup server

```
# Run build
docker-compose build

# Start server
docker-compose up

# Connect into Rails container
docker-compose exec web bash

# Setup database
rake db:create
rake db:migrate
rake db:seed
```

### Try Devise auth.

```
# Open public page
open http://localhost:3000 

# Open protected page
open http://localhost:3000/protected

# Sign-in by browser (email: "hoge@piyo.com", pass: "password")
open http://localhost:3000/users/sign_in
```

### How to play

```
# Install dependencies
npm i

# Authenticate against devise user from Node.js scripts.
npm run auth
```
