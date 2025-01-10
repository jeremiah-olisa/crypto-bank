<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Inertia\Inertia;
use Illuminate\Foundation\Application;
use Illuminate\Support\Env;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Welcome', [
            'appName' => Env::get('APP_NAME', "Crypto Bank"),
        ]);
    }
}
