<?php

namespace App\Services;

use App\Repositories\NotificationRepository;

class NotificationService
{
    protected NotificationRepository $notificationRepository;

    /**
     * Create a new class instance.
     */
    public function __construct(NotificationRepository $notificationRepository)
    {
        $this->notificationRepository = $notificationRepository;
    }
}