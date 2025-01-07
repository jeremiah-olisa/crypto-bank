<?php

namespace App\Repositories;

use App\Models\Notification;
use LaravelPredatorApiUtils\Repositories\BaseRepository;

class NotificationRepository extends BaseRepository
{
    public function __construct(Notification $notification)
    {
        parent::__construct($notification);
    }
}