<?php namespace App\Routes\Controllers;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class ApiController {
    public static function d4(Request $request, Response $response) {
        $roll = rand(1, 4);
        $data = ['roll' => $roll];
        $response
            ->withHeader('Content-Type', 'application/json')
            ->getBody()
            ->write(json_encode($data));        
        return $response;
    }

    public static function d6(Request $request, Response $response) {
        $roll = rand(1, 6);
        $data = ['roll' => $roll];
        $response
            ->withHeader('Content-Type', 'application/json')
            ->getBody()
            ->write(json_encode($data));        
        return $response;
    }

    public static function d8(Request $request, Response $response) {
        $roll = rand(1, 8);
        $data = ['roll' => $roll];
        $response
            ->withHeader('Content-Type', 'application/json')
            ->getBody()
            ->write(json_encode($data));        
        return $response;
    }

    public static function d10(Request $request, Response $response) {
        $roll = rand(1, 10);
        $data = ['roll' => $roll];
        $response
            ->withHeader('Content-Type', 'application/json')
            ->getBody()
            ->write(json_encode($data));        
        return $response;
    }

    public static function d12(Request $request, Response $response) {
        $roll = rand(1, 12);
        $data = ['roll' => $roll];
        $response
            ->withHeader('Content-Type', 'application/json')
            ->getBody()
            ->write(json_encode($data));        
        return $response;
    }

    public static function d20(Request $request, Response $response) {
        $roll = rand(1, 20);
        $data = ['roll' => $roll];
        $response
            ->withHeader('Content-Type', 'application/json')
            ->getBody()
            ->write(json_encode($data));        
        return $response;
    }
}
