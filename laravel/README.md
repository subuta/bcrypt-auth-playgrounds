# laravel example

SEE: https://medium.com/swlh/laravel-with-docker-compose-de2190569084

### How to setup server

```
# Starts from project root.
cd laravel

# Initialize Laravel project, Already done this for you :)
# docker run -w /var/www/html -v "$PWD/src:/var/www/html" composer/composer create-project --prefer-dist laravel/laravel . && mv src/* src/.* . && rm -r ./src

# Run build
docker-compose build

# Create .env
cp .env.example .env

# Generate keys.
docker-compose run web php artisan key:generate

# Start server
docker-compose up

# Connect into Rails container
docker-compose exec web ash

# Setup database
rake db:create
rake db:migrate
rake db:seed
```
