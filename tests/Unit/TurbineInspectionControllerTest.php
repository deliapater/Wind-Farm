<?php

namespace Test\Unit;

use App\Http\Controllers\TurbineInspectionController;
use App\Models\Component;
use App\Models\Turbine;
use App\Models\TurbineInspection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\DB;
use Illuminate\Testing\TestResponse;
use Tests\TestCase;

class TurbineInspectionControllerTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /**
     * Test the index method
     *
     * @return void
     */
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

     /**
     * Test the create method
     *
     * @return void
     */
    public function test_create_method()
    {
        // Create a test turbine and component
        $turbine = Turbine::factory()->create();
        $component = Component::factory()->create(['turbine_id' => $turbine->id]);

        // Call the create method and assert that the view is returned
        $response = $this->get('/turbine_inspections/create?component_id=' . $component->id);
        $response->assertViewIs('turbine_inspections.create');
    }

    /**
     * Test the store method
     *
     * @return void
     */
    public function test_store_method()
    {
        // Create a test turbine and component
        $turbine = Turbine::factory()->create();
        $component = Component::factory()->create(['turbine_id' => $turbine->id]);

        // Set up the inspection data
        $inspection = TurbineInspection::factory()->make([
        'component_id' => $component->id,
        'turbine_id' => $turbine->id,
        'grade' => 1
        ]);

        // Call the store method with the inspection data and assert that the inspection is saved to the database
        $response = $this->post('/turbine_inspections', [
            'component_id' => $inspection->component_id,
            'turbine_id' => $inspection->turbine_id,
            'grade' => $inspection->grade,
        ]);
        $response->assertRedirect('/turbine_inspections');
        $this->assertDatabaseHas('turbine_inspections', [
            'component_id' => $inspection->component_id,
            'turbine_id' => $inspection->turbine_id,
            'grade' => $inspection->grade,
        ]);
    }
}