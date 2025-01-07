<?php

namespace App\Repositories;

use App\Models\Dispute;
use LaravelPredatorApiUtils\Repositories\BaseRepository;

class DisputeRepository extends BaseRepository
{
    public function __construct(Dispute $dispute)
    {
        parent::__construct($dispute);
    }
}