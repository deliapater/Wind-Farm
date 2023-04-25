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
                        <th>Turbine ID</th>
                        <th>Component ID</th>
                        <th>Grade ID</th>
                    </tr>
                <thead>
                <tbody>
                    @foreach($turbine_inspections as $turbine_inspection)
                        <tr>
                            <td>{{ $turbine_inspection->turbine->id }}</td>
                            <td>{{ $turbine_inspection->component->id }}</td>
                            <td>{{ $turbine_inspection->grade->id }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>