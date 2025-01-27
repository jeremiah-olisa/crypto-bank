<?php

namespace App\Services;

use App\Repositories\PermissionRepository;
use App\Repositories\RoleRepository;

class AuthorizationService
{
    protected RoleRepository $roleRepository;
    protected PermissionRepository $permissionRepository;

    /**
     * Create a new class instance.
     */
    public function __construct(RoleRepository $roleRepository, PermissionRepository $permissionRepository)
    {
        $this->roleRepository = $roleRepository;
        $this->permissionRepository = $permissionRepository;
    }
}
