# Start from the official PHP 8.1 image (or 8.0 if needed)
FROM php:8.1-cli

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    libzip-dev \
    libonig-dev \
    libpq-dev \    # PostgreSQL support (if needed)
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    curl \
    git

# Clean up unnecessary apt files
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip pdo_pgsql

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set the working directory
WORKDIR /var/www

# Remove the default nginx index page (if applicable)
RUN rm -rf /var/www/html

# Copy the application code and set permissions
COPY . /var/www

# Change ownership of files to the www-data user and group
RUN chown -R www-data:www-data /var/www

# Switch to the www-data user
USER www-data

# Run composer install (as www-data)
RUN composer install --no-interaction --prefer-dist

# Expose the port Laravel will serve on
EXPOSE 8000

# Start Laravel's server
CMD php artisan serve --host=0.0.0.0 --port=8000
