<?php

namespace App\Http\Controllers;

use App\Services\NotificationService;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    protected NotificationService $notificationService;

    /**
     * Create a new controller instance.
     */
    public function __construct(NotificationService $notificationService)
    {
        $this->notificationService = $notificationService;
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