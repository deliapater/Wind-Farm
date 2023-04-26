<?php

namespace Test\Unit;

use App\Http\Controllers\TurbineInspectionController;
use App\Models\Component;
use App\Models\Turbine;
use App\Models\TurbineInspection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\TestResponse;
use Tests\TestCase;

class TurbineInspectionControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_index_method_returns_view_with_turbine_inspections_data()
    {
        // create test data
        $turbine = Turbine::factory()->create();
        $component = Component::factory()->create(['turbine_id' => $turbine->id]);
        $inspection = TurbineInspection::factory()->create(['component_id' => $component->id]);

        // create controller instance
        $controller = new TurbineInspectionController();

        // call index method and get response
        $response = $this->get('/turbine_inspections');

        // assert that view is returned
        $response->assertOk('turbine_inspection.index');

        // assert that view contains expected data
        $response->assertViewHas('turbine_inspections');
    }
}