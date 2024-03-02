<?php namespace App\Routes\Controllers;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App as App;

class ApiController {
    public static function d4(Request $request, Response $response, App $app) {
        $roll = rand(1, 4);
        $data = ['roll' => $roll, 'sides' => 4];
        $view = $app->getContainer()->get('view');
        return $view->render($response, 'roll.twig.html', $data);
    }

    public static function d6(Request $request, Response $response, App $app) {
        $roll = rand(1, 6);
        $data = ['roll' => $roll, 'sides' => 6];
        $view = $app->getContainer()->get('view');
        return $view->render($response, 'roll.twig.html', $data);
    }

    public static function d8(Request $request, Response $response, App $app) {
        $roll = rand(1, 8);
        $data = ['roll' => $roll, 'sides' => 8];
        $view = $app->getContainer()->get('view');
        return $view->render($response, 'roll.twig.html', $data);
    }

    public static function d10(Request $request, Response $response, App $app) {
        $roll = rand(1, 10);
        $data = ['roll' => $roll, 'sides' => 10];
        $view = $app->getContainer()->get('view');
        return $view->render($response, 'roll.twig.html', $data);
    }

    public static function d12(Request $request, Response $response, App $app) {
        $roll = rand(1, 12);
        $data = ['roll' => $roll, 'sides' => 12];
        $view = $app->getContainer()->get('view');
        return $view->render($response, 'roll.twig.html', $data);
    }

    public static function d20(Request $request, Response $response, App $app) {
        $roll = rand(1, 20);
        $data = ['roll' => $roll, 'sides' => 20];
        $view = $app->getContainer()->get('view');
        return $view->render($response, 'roll.twig.html', $data);
    }
}
