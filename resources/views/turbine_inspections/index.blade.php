<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Turbine Inspections</title>
        <link rel="stylesheet" href="{{ asset('css/app.css')}}">
    </head>
    <body>
        <div class="container">
            <h1>Turbine Inspections</h1>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Component ID</th>
                        <th>Grade ID</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($turbine_inspections as $turbine_inspection)
                        <tr>
                            @if ($turbine_inspection->component)
                                <td>{{ $turbine_inspection->component->id }}</td>
                                <td>{{ $turbine_inspection->grade }}</td>
                            @else
                                <td>N/A</td>
                            @endif 
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>