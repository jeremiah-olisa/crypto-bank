<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class RolePermissionController extends Controller
{
    public function roles()
    {
        return Inertia::render("Roles/Index");
    }

    public function editRole(int $role_id)
    {
        return Inertia::render("Roles/Edit");
    }
    public function createRole()
    {
        return Inertia::render("Roles/Create");
    }
    public function deleteRole(int $role_id) {}

    public function permissions()
    {
        return Inertia::render("Permissions/Index");
    }
}
