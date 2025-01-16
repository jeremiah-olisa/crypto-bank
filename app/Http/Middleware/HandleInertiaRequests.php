<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Env;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'app' => [
                'name' => Env::get('APP_NAME'),
                'env' => Env::get('APP_ENV'),
                'debug' => Env::get('APP_DEBUG'),
                'isProduction' => Env::get('APP_ENV') == 'production',
            ],
            'flash' => [
                'message' => fn() => $request->session()->get('message'),
                'success' => fn() => $request->session()->get('success'),
                'danger' => fn() => $request->session()->get('danger'),
            ],
        ];
    }
}
