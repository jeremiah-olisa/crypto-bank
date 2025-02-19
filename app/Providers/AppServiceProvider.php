<?php

namespace App\Providers;

use Illuminate\Routing\UrlGenerator;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void {}

    /**
     * Bootstrap any application services.
     */
    public function boot(UrlGenerator $url)
    {
        Vite::prefetch(concurrency: 3);
        if (env('APP_ENV') == 'production' || strtolower(env('APP_URL_SCHEME')) == 'https') {
            $url->forceScheme('https');
        }
    }
}
