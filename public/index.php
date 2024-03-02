<?php
use DI\Container;
use Slim\Factory\AppFactory;
use Slim\Views\Twig;
use Slim\Views\TwigMiddleware;
use App\Routes;

require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../src/Routes/ApiRoutes.php';
require __DIR__ . '/../src/Routes/HomeRoutes.php';

// Sets up dependency injection container.
$container = new Container();
AppFactory::setContainer($container);

// Sets up Twig.
$container->set('view', function () {
    return Twig::create(__DIR__ . '/../src/views', ['cache' => false]);
});

// Sets up Flash messages.
$container->set('flash', function () {
    return new \Slim\Flash\Messages();
});

// TODO implement CSRF.
//$container->set('csrf', function () {
//    return new \Slim\Csrf\Guard();
//});

// Creates app.
$app = AppFactory::create();

// Middleware.
$app->add(TwigMiddleware::createFromContainer($app));

// Functions to add routes in controllers.
Routes\HomeRoutes($app);
Routes\ApiRoutes($app);

$app->run();
