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
    public function index()
    {
        $turbine_inspections = TurbineInspection::with(['turbine', 'component'])->get();
        return view('turbine_inspections.index', compact('turbine_inspections'));      
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
        //
    }
}
