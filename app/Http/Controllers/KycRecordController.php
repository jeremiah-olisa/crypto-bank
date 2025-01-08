<?php

namespace App\Http\Controllers;

use App\Services\KycRecordService;
use Illuminate\Http\Request;

class KycRecordController extends Controller
{
    protected KycRecordService $kycRecordService;

    /**
     * Create a new controller instance.
     */
    public function __construct(KycRecordService $kycRecordService)
    {
        $this->kycRecordService = $kycRecordService;
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