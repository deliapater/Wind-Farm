<!DOCTYPE html>
<html>
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