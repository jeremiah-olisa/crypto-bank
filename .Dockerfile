FROM php:8.2-fpm-alpine

# Install dependencies
RUN apk add --no-cache \
    postgresql-dev \
    libzip-dev \
    openssl-dev \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    icu-dev \
    zlib-dev \
    && docker-php-ext-install pdo pdo_pgsql zip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd \
    && apk add --no-cache libzip && docker-php-ext-install zip

# Copy composer.json and composer.lock
COPY composer*.json ./

# Install project dependencies
RUN composer install --no-interaction --no-ansi

# Copy the entire project
COPY . .

# Set working directory
WORKDIR /var/www/html

# Expose port 9000 (or your desired port)
EXPOSE 8000

# Start PHP-FPM
CMD ["php-fpm"]