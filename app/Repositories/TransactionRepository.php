<?php

namespace App\Repositories;

use App\Models\Transaction;
use LaravelPredatorApiUtils\Repositories\BaseRepository;

class TransactionRepository extends BaseRepository
{
    public function __construct(Transaction $transaction)
    {
        parent::__construct($transaction);
    }
}