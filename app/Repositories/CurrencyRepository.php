<?php

namespace App\Repositories;

use App\Models\Currency;
use LaravelPredatorApiUtils\Repositories\BaseRepository;

class CurrencyRepository extends BaseRepository
{
    public function __construct(Currency $currency)
    {
        parent::__construct($currency);
    }
}