<?php

namespace App\Http\Controllers;

use App\Models\Country;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
        public function index()
        {
            return Inertia::render('Home', [
                'countries' => Country::all()->map(function ($country) {
                    return ['value' => $country->code, 'label' => $country->name];
                }),

                'services' => Service::all()->map(function ($service) {
                    return ['value' => $service->code, 'label' => $service->name];
                }),
            ]);
        }
}
