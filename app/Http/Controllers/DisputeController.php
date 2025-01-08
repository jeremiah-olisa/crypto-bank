<?php

namespace App\Http\Controllers;

use App\Services\DisputeService;
use Illuminate\Http\Request;

class DisputeController extends Controller
{
    protected DisputeService $disputeService;

    /**
     * Create a new controller instance.
     */
    public function __construct(DisputeService $disputeService)
    {
        $this->disputeService = $disputeService;
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