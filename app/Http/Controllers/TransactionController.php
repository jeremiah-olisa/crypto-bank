<?php

namespace App\Http\Controllers;

use App\Services\TransactionService;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    protected TransactionService $transactionService;

    /**
     * Create a new controller instance.
     */
    public function __construct(TransactionService $transactionService)
    {
        $this->transactionService = $transactionService;
    }

    /**
     * Example method for listing resources.
     */
    public function index()
    {
        // Use the service for logic
    }

    /**
     * Example method for showing a single resource.
     */
    public function show($id)
    {
        // Use the service for logic
    }
}