<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    use HasFactory;

    protected $guarded = ['id', 'created_at', 'updated_at'];
    protected $appends = ['status', 'price'];

    public function transactions()
    {
        $this->hasMany(Transaction::class);
    }

    /**
     * Scope a query to only include published currencies.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePublished($query)
    {
        return $query->where('is_published', true);
    }

    public function getStatusAttribute()
    {
        return $this?->is_published ? "Published" : "Draft";
    }


    public function getPriceAttribute()
    {
        return "Not Available";
    }

    protected function casts(): array
    {
        return [
            // 'created_at' => 'datetime',
            'created_at' => 'datetime:d M Y h:00',
        ];
    }
}
