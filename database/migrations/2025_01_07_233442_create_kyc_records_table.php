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
        Schema::create('kyc_records', function (Blueprint $table) {
            $table->id();
             $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // Foreign key reference to users table
            $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending'); // Status of the KYC
            $table->string('document_type'); // Type of document (e.g., Passport, ID Card)
            $table->text('document_url'); // Link to the uploaded document
            $table->foreignId('reviewed_by')->nullable()->constrained('users')->onDelete('set null'); // Admin who reviewed the KYC (nullable)
            $table->timestamp('reviewed_at')->nullable(); // Date when the KYC was reviewed
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kyc_records');
    }
};
