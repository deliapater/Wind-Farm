<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TurbineInspection extends Model
{
    use HasFactory;

    protected $fillable = [
        'component_id',
        'turbine_id',
        'grade'
    ];

    public function component()
    {
        return $this->belongsTo(Component::class);
    }

    public function turbine()
    {
        return $this->belongsTo(Turbine::class);
    }
}
