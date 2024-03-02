<?php namespace App\Routes;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App as App;
use App\Routes\Controllers\HomeController;

require_once __DIR__ . '/controllers/HomeController.php';

function HomeRoutes(App $app) {
    $app->get('/', function(Request $request, Response $response) use ($app) {
        return HomeController::index($request, $response, $app); 
    });

    $app->get('/roll', function(Request $request, Response $response) use ($app) {
        return HomeController::roll($request, $response, $app);
    });
}
