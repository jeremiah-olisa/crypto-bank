<?php

use App\Http\Controllers\CurrencyController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RolePermissionController;
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
            Route::get('/{currencyId}/details', [CurrencyController::class, 'index'])->name('currency.details');
            Route::get('/list', [CurrencyController::class, 'index'])->name('currency.list');
            Route::get('/create', [CurrencyController::class, 'create'])->name('currency.create');
            Route::post('/create', [CurrencyController::class, 'store'])->name('currency.store');

            Route::get('/edit/{currencyId}', [CurrencyController::class, 'edit'])->name('currency.edit');
            Route::get('/update/{currencyId}', [CurrencyController::class, 'update'])->name('currency.update');
        });

        Route::prefix('user-management')->group(function () {
            Route::get('/roles', [RolePermissionController::class, 'roles'])->name('user-management.roles');
            Route::get('/roles/create', [RolePermissionController::class, 'createRole'])->name('user-management.roles.create');
            Route::get('/role/{roleId}/edit', [RolePermissionController::class, 'editRole'])->name('user-management.roles.edit');
            Route::delete('/role/{roleId}', [RolePermissionController::class, 'deleteRole'])->name('user-management.roles.delete');

            Route::get('/permissions', [RolePermissionController::class, 'permissions'])->name('user-management.permissions');
        });
    });
});

require __DIR__ . '/auth.php';
