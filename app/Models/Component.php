<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Component extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'image',
        'description'
    ];

    public function turbine()
    {
        return $this->belongsTo(Turbine::class);
    }

    public function turbineInspection()
    {
        return $this->hasMany(TurbineInspection::class);
    }
}
