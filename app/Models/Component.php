<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Component extends Model
{
    use HasFactory;

    public function turbinee()
    {
        return $this->belongsTo(Turbine::class);
    }

    public function turbineInspection()
    {
        return $this->hasMany(turbineInspection::class);
    }
}
