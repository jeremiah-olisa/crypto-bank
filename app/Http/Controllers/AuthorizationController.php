<?php

namespace App\Http\Controllers;

use App\Services\AuthorizationService;
use Illuminate\Http\Request;

class AuthorizationController extends Controller
{
    protected AuthorizationService $authorizationService;

    /**
     * Create a new controller instance.
     */
    public function __construct(AuthorizationService $authorizationService)
    {
        $this->authorizationService = $authorizationService;
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