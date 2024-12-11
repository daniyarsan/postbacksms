<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostbackController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'] )->name('index');

Route::get('/postback/getNumber', [PostbackController::class, 'getNumber'] )->name('getNumber');
Route::get('/postback/getSms', [PostbackController::class, 'getSms'] )->name('getSms');
Route::get('/postback/cancelNumber', [PostbackController::class, 'cancelNumber'] )->name('cancelNumber');
Route::get('/postback/getStatus', [PostbackController::class, 'getStatus'] )->name('getStatus');


//Route::get('/dashboard', function () {
//    return Inertia::render('Dashboard');
//})->middleware(['auth', 'verified'])->name('dashboard');
//
//Route::middleware('auth')->group(function () {
//    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
//});

require __DIR__.'/auth.php';
