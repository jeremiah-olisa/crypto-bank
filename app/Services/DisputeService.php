<?php

namespace App\Services;

use App\Repositories\DisputeRepository;

class DisputeService
{
    protected DisputeRepository $disputeRepository;

    /**
     * Create a new class instance.
     */
    public function __construct(DisputeRepository $disputeRepository)
    {
        $this->disputeRepository = $disputeRepository;
    }
}