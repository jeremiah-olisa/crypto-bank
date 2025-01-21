<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('currencies', function (Blueprint $table) {
            $table->boolean('is_published')->default(false)->after('code');
            $table->string('category')->after('is_published');


            $table->string('image_cloud_id')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('currencies', function (Blueprint $table) {
            $table->dropColumn(['is_published', 'category']);

            $table->string('image_cloud_id')->unique()->nullable(false)->change();
        });
    }
};
