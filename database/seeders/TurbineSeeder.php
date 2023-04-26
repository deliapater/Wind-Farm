<?php

namespace Database\Seeders;

use App\Models\Turbine;
use App\Models\Component;
use App\Models\TurbineInspection;
use Database\Factories\TurbineFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TurbineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create 3 turbines
        $turbine1 = Turbine::factory()->create(['name' => 'Turbine A']);
        $turbine2 = Turbine::factory()->create(['name' => 'Turbine B']);
        $turbine3 = Turbine::factory()->create(['name' => 'Turbine C']);

        // Create 4 components for each turbine
        $componentA1 = Component::factory()->create(['turbine_id' => $turbine1->id, 'name' => 'Component A1']);
        $componentA2 = Component::factory()->create(['turbine_id' => $turbine1->id, 'name' => 'Component A2']);
        $componentA3 = Component::factory()->create(['turbine_id' => $turbine1->id, 'name' => 'Component A3']);
        $componentA4 = Component::factory()->create(['turbine_id' => $turbine1->id, 'name' => 'Component A4']);

        $componentB1 = Component::factory()->create(['turbine_id' => $turbine2->id, 'name' => 'Component B1']);
        $componentB2 = Component::factory()->create(['turbine_id' => $turbine2->id, 'name' => 'Component B2']);
        $componentB3 = Component::factory()->create(['turbine_id' => $turbine2->id, 'name' => 'Component B3']);
        $componentB4 = Component::factory()->create(['turbine_id' => $turbine2->id, 'name' => 'Component B4']);

        $componentC1 = Component::factory()->create(['turbine_id' => $turbine3->id, 'name' => 'Component C1']);
        $componentC2 = Component::factory()->create(['turbine_id' => $turbine3->id, 'name' => 'Component C2']);
        $componentC3 = Component::factory()->create(['turbine_id' => $turbine3->id, 'name' => 'Component C3']);
        $componentC4 = Component::factory()->create(['turbine_id' => $turbine3->id, 'name' => 'Component C4']);

        // Create inspections for each component
        TurbineInspection::factory()->create(['component_id' => $componentA1->id, 'turbine_id' => $turbine1->id, 'grade' => 1]);
        TurbineInspection::factory()->create(['component_id' => $componentA2->id, 'turbine_id' => $turbine1->id, 'grade' => 4]);
        TurbineInspection::factory()->create(['component_id' => $componentA3->id, 'turbine_id' => $turbine1->id, 'grade' => 1]);
        TurbineInspection::factory()->create(['component_id' => $componentA4->id, 'turbine_id' => $turbine1->id, 'grade' => 2]);
    }
}
