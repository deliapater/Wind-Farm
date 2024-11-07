<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TurbineInspection extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'component_id',
        'turbine_id',
        'grade',
        'inspected_at',
        'inspected_by'
    ];

    public function component()
    {
        return $this->belongsTo(Component::class);
    }

    public function turbine()
    {
        return $this->belongsTo(Turbine::class);
    }

    public function inspector()
    {
        return $this->belongsTo(User::class, 'inspected_by');
    }
}
