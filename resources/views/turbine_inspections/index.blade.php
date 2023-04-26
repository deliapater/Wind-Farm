<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Turbine Inspections</title>
        <link rel="stylesheet" href="{{ asset('css/app.css')}}">
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
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    @endsection
    </body>
</html>