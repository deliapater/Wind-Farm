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
        $turbines = Turbine::factory()->count(3)->create();

        foreach ($turbines as $turbine) {
            // Create 4 components for each turbine
            $components = Component::factory()->count(4)->create(['turbine_id' => $turbine->id]);

            foreach ($components as $component) {
                // Create 3 inspections for each component
                TurbineInspection::factory()->count(3)->create(['component_id' => $component->id, 'turbine_id' => $turbine->id]);
            }
        }
    }
}
