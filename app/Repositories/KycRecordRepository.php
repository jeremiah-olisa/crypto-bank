<?php

namespace App\Repositories;

use App\Models\KycRecord;
use LaravelPredatorApiUtils\Repositories\BaseRepository;

class KycRecordRepository extends BaseRepository
{
    public function __construct(KycRecord $kycrecord)
    {
        parent::__construct($kycrecord);
    }
}