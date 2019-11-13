FROM php:alpine

# SEE: https://gitlab.com/crocodile2u/laravel-docker/blob/master/docker/php/dev.Dockerfile
RUN apk add --no-cache $PHPIZE_DEPS && \
    pecl install xdebug && docker-php-ext-enable xdebug && \
    docker-php-ext-install pdo_mysql

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer

RUN mkdir /myapp
WORKDIR /myapp
COPY . /myapp

RUN composer install

# Start the main process.
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=3000"]
