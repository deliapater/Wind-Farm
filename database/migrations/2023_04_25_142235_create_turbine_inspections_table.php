<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('turbine_inspections', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('turbine_id')->nullable();
            $table->unsignedBigInteger('component_id');
            $table->integer('grade')->unsigned()->default(1);
            $table->timestamps();

            $table->foreign('turbine_id')->references('id')->on('turbines')->onDelete('cascade');
            $table->foreign('component_id')->references('id')->on('components')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('turbine_inspections');
    }
};
