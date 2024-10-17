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
        $componentA1 = Component::factory()->create(['turbine_id' => $turbine1->id, 'name' => 'Blade']);
        $componentA2 = Component::factory()->create(['turbine_id' => $turbine1->id, 'name' => 'Rotor']);
        $componentA3 = Component::factory()->create(['turbine_id' => $turbine1->id, 'name' => 'Hub']);
        $componentA4 = Component::factory()->create(['turbine_id' => $turbine1->id, 'name' => 'Generator']);

        $componentB1 = Component::factory()->create(['turbine_id' => $turbine2->id, 'name' => 'Blade']);
        $componentB2 = Component::factory()->create(['turbine_id' => $turbine2->id, 'name' => 'Rotor']);
        $componentB3 = Component::factory()->create(['turbine_id' => $turbine2->id, 'name' => 'Hub']);
        $componentB4 = Component::factory()->create(['turbine_id' => $turbine2->id, 'name' => 'Generator']);

        $componentC1 = Component::factory()->create(['turbine_id' => $turbine3->id, 'name' => 'Blade']);
        $componentC2 = Component::factory()->create(['turbine_id' => $turbine3->id, 'name' => 'Rotor']);
        $componentC3 = Component::factory()->create(['turbine_id' => $turbine3->id, 'name' => 'Hub']);
        $componentC4 = Component::factory()->create(['turbine_id' => $turbine3->id, 'name' => 'Generator']);

        // Create inspections for each component
        TurbineInspection::factory()->create(['component_id' => $componentA1->id, 'turbine_id' => $turbine1->id, 'grade' => 1, 'deleted_at' => null]);
        TurbineInspection::factory()->create(['component_id' => $componentA2->id, 'turbine_id' => $turbine1->id, 'grade' => 4, 'deleted_at' => null]);
        TurbineInspection::factory()->create(['component_id' => $componentA3->id, 'turbine_id' => $turbine1->id, 'grade' => 1, 'deleted_at' => null]);
        TurbineInspection::factory()->create(['component_id' => $componentA4->id, 'turbine_id' => $turbine1->id, 'grade' => 2, 'deleted_at' => null]);

        TurbineInspection::factory()->create(['component_id' => $componentB1->id, 'turbine_id' => $turbine2->id, 'grade' => 1, 'deleted_at' => null]);
        TurbineInspection::factory()->create(['component_id' => $componentB2->id, 'turbine_id' => $turbine2->id, 'grade' => 1, 'deleted_at' => null]);
        TurbineInspection::factory()->create(['component_id' => $componentB3->id, 'turbine_id' => $turbine2->id, 'grade' => 1, 'deleted_at' => null]);
        TurbineInspection::factory()->create(['component_id' => $componentB4->id, 'turbine_id' => $turbine2->id, 'grade' => 3, 'deleted_at' => null]);

        TurbineInspection::factory()->create(['component_id' => $componentC1->id, 'turbine_id' => $turbine3->id, 'grade' => 4, 'deleted_at' => null]);
        TurbineInspection::factory()->create(['component_id' => $componentC2->id, 'turbine_id' => $turbine3->id, 'grade' => 4, 'deleted_at' => null]);
        TurbineInspection::factory()->create(['component_id' => $componentC3->id, 'turbine_id' => $turbine3->id, 'grade' => 3, 'deleted_at' => null]);
        TurbineInspection::factory()->create(['component_id' => $componentC4->id, 'turbine_id' => $turbine3->id, 'grade' => 2, 'deleted_at' => null]);
    }
}
