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
        $componentA1 = Component::factory()->create(['turbine_id' => $turbine1->id, 'name' => 'Blade', 'image' => 'images/blade.webp', 'description' => 'This is the blade of the turbine, which converts wind energy into rotational energy.']);
        $componentA2 = Component::factory()->create(['turbine_id' => $turbine1->id, 'name' => 'Rotor', 'image' => 'images/rotor.jpg', 'description' => 'The rotor is the rotating part of the turbine that harnesses wind energy.']);
        $componentA3 = Component::factory()->create(['turbine_id' => $turbine1->id, 'name' => 'Hub', 'image' => 'images/hub.jpeg', 'description' => 'The hub connects the blades and the rotor to the generator.']);
        $componentA4 = Component::factory()->create(['turbine_id' => $turbine1->id, 'name' => 'Generator', 'image' => 'images/generator.jpeg', 'description' => 'The generator converts mechanical energy into electrical energy.']);

        $componentB1 = Component::factory()->create(['turbine_id' => $turbine2->id, 'name' => 'Blade', 'image' => 'images/blade.webp', 'description' => 'This is the blade of the turbine, which converts wind energy into rotational energy.']);
        $componentB2 = Component::factory()->create(['turbine_id' => $turbine2->id, 'name' => 'Rotor', 'image' => 'images/rotor.jpg', 'description' => 'The rotor is the rotating part of the turbine that harnesses wind energy.']);
        $componentB3 = Component::factory()->create(['turbine_id' => $turbine2->id, 'name' => 'Hub', 'image' => 'images/hub.jpeg', 'description' => 'The hub connects the blades and the rotor to the generator.']);
        $componentB4 = Component::factory()->create(['turbine_id' => $turbine2->id, 'name' => 'Generator', 'image' => 'images/generator.jpeg', 'description' => 'The generator converts mechanical energy into electrical energy.']);

        $componentC1 = Component::factory()->create(['turbine_id' => $turbine3->id, 'name' => 'Blade', 'image' => 'images/blade.webp', 'description' => 'This is the blade of the turbine, which converts wind energy into rotational energy.']);
        $componentC2 = Component::factory()->create(['turbine_id' => $turbine3->id, 'name' => 'Rotor', 'image' => 'images/rotor.jpg', 'description' => 'The rotor is the rotating part of the turbine that harnesses wind energy.']);
        $componentC3 = Component::factory()->create(['turbine_id' => $turbine3->id, 'name' => 'Hub', 'image' => 'mages/hub.jpeg', 'description' => 'The hub connects the blades and the rotor to the generator.']);
        $componentC4 = Component::factory()->create(['turbine_id' => $turbine3->id, 'name' => 'Generator', 'image' => 'images/generator.jpeg', 'description' => 'The generator converts mechanical energy into electrical energy.']);

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
