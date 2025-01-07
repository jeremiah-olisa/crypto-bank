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
        Schema::create('disputes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('transaction_id')->constrained('transactions')->onDelete('cascade'); // Foreign key reference to transactions table
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // Foreign key reference to users table
            $table->text('reason'); // Reason for the dispute
            $table->enum('status', ['open', 'pending', 'resolved'])->default('open'); // Status of the dispute
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('disputes');
    }
};
