<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TurbineInspectionController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('turbine_inspections.index');
});

Route::get('/create', function () {
    return view('turbine_inspections.store');
});

Route::get('/{any}', function () {
    return view('layouts.app');
})->where('any', '.*');