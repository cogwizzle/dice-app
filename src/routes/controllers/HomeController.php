<?php namespace App\Routes\Controllers;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App as App;

class HomeController {
    public static function index(Request $request, Response $response, App $app) {
        $view = $app->getContainer()->get('view');
        return $view->render($response, 'home.twig.html');
    }

    public static function roll(Request $request, Response $response, App $app) {
        /** @var int $dice */
        $dice = intval($request->getQueryParams()['dice']);
        $roll = rand(1, $dice);
        $view = $app->getContainer()->get('view');
        return $view->render($response, 'home.twig.html', ['total' => $roll]);
    }

    public static function manifest(Request $request, Response $response) {
        $manifest = file_get_contents(__DIR__ . '/../../../public/dice.webmanifest');
        $response->getBody()->write($manifest);
        return $response->withHeader('Content-Type', 'application/json');
    }
}
