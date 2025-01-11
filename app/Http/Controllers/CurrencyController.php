<?php

namespace App\Http\Controllers;

use App\Services\CurrencyService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CurrencyController extends Controller
{
    protected CurrencyService $currencyService;

    /**
     * Create a new controller instance.
     */
    public function __construct(CurrencyService $currencyService)
    {
        $this->currencyService = $currencyService;
    }

    /**
     * Example method for listing resources.
     */
    public function index()
    {
        return Inertia::render("Currency/List");
    }

    /**
     * Example method for showing a single resource.
     */
    public function create()
    {
        return Inertia::render("Currency/CreateCurrency");
    }
}
