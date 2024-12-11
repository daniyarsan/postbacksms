<?php

namespace App\Http\Controllers\Api;

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

        return response()->json($response);
    }

    public function getSms(ActivationNumberRequest $request, PostbackApiService $apiService)
    {
        $response = $apiService->get('', $request->validated());

        return response()->json($response);
    }

    public function cancelNumber(ActivationNumberRequest $request, PostbackApiService $apiService)
    {
        dd($request->validated());

        $request->validated();
        $response = $apiService->get('', ['userId' => 1]);

        return response()->json($response);
    }

    public function getStatus(ActivationNumberRequest $request, PostbackApiService $apiService)
    {
        dd($request->validated());

        $request->validated();
        $response = $apiService->get('', ['userId' => 1]);

        return response()->json($response);
    }
}
