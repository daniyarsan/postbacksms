<?php

namespace App\Services;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

class PostbackApiService
{
    protected $client;

    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => env('POSTBACK_URL', ''), // API base URL from .env
            'timeout'  => 10.0,                   // Request timeout
        ]);
    }

    /**
     * Make a GET request.
     */
    public function get($uri, $query = [])
    {
        return $this->sendRequest('GET', $uri, ['query' => [...$query, 'token' => env('POSTBACK_TOKEN', '')]]);
    }


    /**
     * Send the actual HTTP request.
     */
    private function sendRequest($method, $uri, $options = [])
    {
        try {
            $response = $this->client->request($method, $uri, $options);
            return json_decode($response->getBody()->getContents(), true);
        } catch (RequestException $e) {
            // Log the error
            logger()->error("API Request failed: {$e->getMessage()}");

            // Return an error response
            return [
                'error' => true,
                'message' => $e->getMessage(),
                'status_code' => $e->getCode()
            ];
        }
    }
}
