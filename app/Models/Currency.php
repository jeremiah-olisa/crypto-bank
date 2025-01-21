<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    use HasFactory;

    protected $guarded = ['id', 'created_at', 'updated_at'];
    protected $appends = ['status', 'price', 'can_delete'];

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
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

    public function getCanDeleteAttribute()
    {
        // TODO: fix error from this later
        return true ?? !$this->transactions()->exists(); // Returns true if there are no transactions
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
