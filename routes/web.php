<?php

use App\Http\Controllers\CurrencyController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->middleware(['guest'])->name("home");



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::prefix('admin')->group(function () {

        Route::get('/dashboard', function () {
            return Inertia::render('Dashboard');
        })->name('dashboard');



        Route::prefix('currency')->group(function () {
            Route::get('/list', [CurrencyController::class, 'index'])->name('currency.list');
            Route::get('/create', [CurrencyController::class, 'create'])->name('currency.create');
        });
    });
});

require __DIR__ . '/auth.php';
