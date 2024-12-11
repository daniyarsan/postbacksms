<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ActivationNumberRequest;
use App\Http\Requests\Api\GetNumberRequest;
use App\Services\PostbackApiService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostbackController extends Controller
{

    public function getNumber(GetNumberRequest $request, PostbackApiService $apiService)
    {
        $response = $apiService->get('', [...$request->validated(), 'action' => 'getNumber']);

//        $response = [
//            "code" => "ok",
//            "number" => "18181817177",
//            "activation" => "10869836",
//            "end_date" => "2022-09-01 18:16:00", //если передавался параметр rent_time
//            "cost" => 0.01
//        ];

        if (isset($response['code']) && $response['code'] === 'error') {
            return redirect()->back()->withErrors($response['message'] ?? 'An error occurred');
        }

        return back()->with('success', 'Operation completed successfully!')
            ->with('data', $response);
    }

    public function getSms(ActivationNumberRequest $request, PostbackApiService $apiService)
    {
        $response = $apiService->get('', [...$request->validated(), 'action' => 'getSms']);

        if (isset($response['code']) && $response['code'] === 'error') {
            return redirect()->back()->withErrors($response['message'] ?? 'An error occurred');
        }

        return back()->with('success', 'Operation completed successfully!')
            ->with('data', $response);
    }

    public function cancelNumber(ActivationNumberRequest $request, PostbackApiService $apiService)
    {
        $response = $apiService->get('', [...$request->validated(), 'action' => 'cancelNumber']);

        if (isset($response['code']) && $response['code'] === 'error') {
            return redirect()->back()->withErrors($response['message'] ?? 'An error occurred');
        }

        return back()->with('success', 'Operation completed successfully!')
            ->with('data', $response);
    }

    public function getStatus(ActivationNumberRequest $request, PostbackApiService $apiService)
    {
        $response = $apiService->get('', [...$request->validated(), 'action' => 'getStatus']);

        if (isset($response['code']) && $response['code'] === 'error') {
            return redirect()->back()->withErrors($response['message'] ?? 'An error occurred');
        }

        return back()->with('success', 'Operation completed successfully!')
            ->with('data', $response);
    }
}
