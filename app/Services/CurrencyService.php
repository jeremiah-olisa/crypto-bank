<?php

namespace App\Services;

use App\Repositories\CurrencyRepository;

class CurrencyService
{
    protected CurrencyRepository $currencyRepository;

    /**
     * Create a new class instance.
     */
    public function __construct(CurrencyRepository $currencyRepository)
    {
        $this->currencyRepository = $currencyRepository;
    }
}