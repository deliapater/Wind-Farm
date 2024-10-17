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
use Illuminate\Http\Request;

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
        $turbine = Turbine::factory()->create();
        $component = Component::factory()->create(['turbine_id' => $turbine->id]);
        $inspection = TurbineInspection::factory()->create(['component_id' => $component->id]);

        $controller = new TurbineInspectionController();

        $response = $this->get('/');
        $response->assertStatus(200);
        $response->assertSee('Turbine Inspections');
        $response->assertViewIs('turbine_inspections.index');
    }

     /**
     * Test the create method
     *
     * @return void
     */
    public function test_create_method()
    {
        $turbine = Turbine::factory()->create();
        $component = Component::factory()->create(['turbine_id' => $turbine->id]);

        // Call the create method and assert that the view is returned
        $response = $this->get('/create');
        $response->assertStatus(200); 
    }

    /**
     * Test soft delete functionality of TurbineInspection model.
     *
     * @return void
     */
    public function test_turbine_inspection_can_be_soft_deleted()
    {
        $turbine = Turbine::factory()->create();
        $component = Component::factory()->create(['turbine_id' => $turbine->id]);
        
        $inspection = TurbineInspection::factory()->create(['component_id' => $component->id]);

        $this->assertDatabaseHas('turbine_inspections', [
            'id' => $inspection->id,
        ]);

        $inspection->delete();

        $this->assertSoftDeleted('turbine_inspections', [
            'id' => $inspection->id,
        ]);

        $this->assertDatabaseHas('turbine_inspections', [
            'id' => $inspection->id,
            'deleted_at' => $inspection->deleted_at
        ]);
    }
}