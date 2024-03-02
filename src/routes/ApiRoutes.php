<?php namespace App\Routes;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App as App;
use App\Routes\Controllers\ApiController;
use Slim\Routing\RouteCollectorProxy;

require_once __DIR__ . '/controllers/ApiController.php';

function ApiRoutes(App $app) {
    $app->group('/api', function(RouteCollectorProxy $group) use ($app) {
        $group->get('/d4', function(Request $request, Response $response) use ($app) {
            return ApiController::d4($request, $response, $app);
        });
    
        $group->get('/d6', function(Request $request, Response $response) use ($app) {
            return ApiController::d6($request, $response, $app);
        });

        $group->get('/d8', function(Request $request, Response $response) use ($app) {
            return ApiController::d8($request, $response, $app);
        });

        $group->get('/d10', function(Request $request, Response $response) use ($app) {
            return ApiController::d10($request, $response, $app);
        });

        $group->get('/d12', function(Request $request, Response $response) use ($app) {
            return ApiController::d12($request, $response, $app);
        });

        $group->get('/d20', function(Request $request, Response $response) use ($app) {
            return ApiController::d20($request, $response, $app);
        });
    });
}
