<?php

namespace App\Services;

use App\Repositories\TransactionRepository;

class TransactionService
{
    protected TransactionRepository $transactionRepository;

    /**
     * Create a new class instance.
     */
    public function __construct(TransactionRepository $transactionRepository)
    {
        $this->transactionRepository = $transactionRepository;
    }
}