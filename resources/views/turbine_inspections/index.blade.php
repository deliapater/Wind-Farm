<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Wind Farm</title>
        <link rel="stylesheet" href="dist/styles.css?v=1.0" />
        <link rel="icon" href="{{ asset('images/logo.png') }}" type="image/png">
    </head>
    <body>
    @extends('layouts.app')

    @section('content')
        <div id="app"></div>
    @endsection
    
    @section('scripts')
        <script src="{{ asset('js/app.js') }}"></script>
    @endsection

    @section('styles')
        <link href="{{ asset('resources/css/app.css') }}" rel="stylesheet">
    @endsection
    </body>
</html>