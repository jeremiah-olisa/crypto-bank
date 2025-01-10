<?php

namespace App\Services;

use App\Repositories\KycRecordRepository;

class KycRecordService
{
    protected KycRecordRepository $kycRecordRepository;

    /**
     * Create a new class instance.
     */
    public function __construct(KycRecordRepository $kycRecordRepository)
    {
        $this->kycRecordRepository = $kycRecordRepository;
    }
}