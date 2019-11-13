<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return response('hello world', 200)
                  ->header('Content-Type', 'text/plain');
});

Route::get('protected', function () {
    return response('protected routes', 200)
                      ->header('Content-Type', 'text/plain');
})->middleware('auth');

Auth::routes();

// Allow logout by get request
Route::get('/logout', function(){
   Auth::logout();
   return Redirect::to('login');
});

Route::get('/home', 'HomeController@index')->name('home');
