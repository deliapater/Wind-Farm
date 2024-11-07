<?php

namespace App\Http\Controllers;

use App\Models\TurbineInspection;
use App\Models\Turbine;
use App\Models\Component;
use Illuminate\Http\Request;

class TurbineInspectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = TurbineInspection::with(['turbine', 'component:id,name,image,description']);

        if ($request->has('search')) {
            $search = $request->input('search');

            $query->whereHas('turbine', function ($q) use ($search) {
                $q->where('name', 'like', '%' .$search . '%');
            })->orWhereHas('component', function ($q) use ($search) {
                $q->where('name', 'like', '%' . $search . '%');
            });
        }

        $sortBy = $request->get('sortBy', 'inspected_at');
        $sortDirection =  $request->get('sortDirection', 'desc');

        $allowedSorts = ['turbine.name', 'component.name', 'grade', 'created_at', 'inspected_at'];
        if (!in_array($sortBy, $allowedSorts)) {
            $sortBy = 'inspected_at';
        }

     if ($sortBy === 'turbine.name') {
        $query->join('turbines', 'turbine_inspections.turbine_id', '=', 'turbines.id')
            ->orderBy('turbines.name', $sortDirection);
    } elseif ($sortBy === 'component.name') {
        $query->join('components', 'turbine_inspections.component_id', '=', 'components.id')
            ->orderBy('components.name', $sortDirection);
    } else {
        // For other allowed columns, including inspected_at
        $query->orderBy($sortBy, $sortDirection);
    }

    $turbine_inspections = $query->paginate(10);

    \Log::info($turbine_inspections);
    return response()->json($turbine_inspections);
 }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $turbines = Turbine::all();
        $components = Component::all();

        return view('turbine_inspections.create', compact('turbines', 'components'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'turbine_id' => 'required',
            'component_id' => 'required',
            'grade' => 'integer'
        ]);

        TurbineInspection::create($data);

        return redirect()->route('turbine_inspections.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $inspection = TurbineInspection::find($id);

        if (!$inspection) {
            return response()->json(['message' => 'Inspection not found'], 400);
        }

        //Perform a soft delete by setting a 'deleted_at' timestamp
        $inspection->delete();

        return response()->json(['message' => 'Inspection deleted successfully'], 204);
    }

    public function showInspectionHistory($turbineId)
    {
        $history = TurbineInspection::where('turbine_id', $turbineId)
            ->with(['component', 'inspector'])
            ->orderBy('inspected_at', 'desc')
            ->get();

        return response()->json($history);
    }

}
