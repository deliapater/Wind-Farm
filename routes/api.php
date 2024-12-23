<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TurbineInspectionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum', 'throttle:60,1'])->get('/user', function (Request $request) {
    return $request->user();
    
});

Route::get('/turbine_inspections', [TurbineInspectionController::class, 'index'])->name('turbine_inspections.index');
Route::get('/turbine_inspections/create', [TurbineInspectionController::class, 'create'])->name('turbine_inspections.create');
Route::post('/turbine_inspections', [TurbineInspectionController::class, 'store'])->name('turbine_inspections.store');
Route::delete('/turbine_inspections/{id}', [TurbineInspectionController::class, 'destroy'])->name('turbine_inspections.destroy');
Route::get('/turbines/{turbineId}/inspections', [TurbineInspectionController::class, 'showInspectionHistory']);
