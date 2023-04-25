<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TurbineInspection extends Model
{
    use HasFactory;

    public function component()
    {
        return $this->belongsTo(Component::class);
    }

    public function turbine()
    {
        return $this->belongsTo(Turbine::class);
    }
}
