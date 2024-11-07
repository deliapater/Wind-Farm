<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddInspectionHistoryFieldsToTurbineInspections extends Migration
{
    public function up()
    {
        Schema::table('turbine_inspections', function (Blueprint $table) {
            $table->timestamp('inspected_at')->nullable()->default(now());
            $table->foreignId('inspected_by')->nullable()->constrained('users');
        });
    }

    public function down()
    {
        Schema::table('turbine_inspections', function (Blueprint $table) {
            $table->dropColumn(['inspected_at', 'inspected_by']);
        });
    }
}
