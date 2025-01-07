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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->string('transaction_ref')->unique();
            $table->bigInteger('user_id')->unsigned()->nullable(false);
            $table->text('description')->nullable(false);
            $table->enum('status', ['pending', 'verified', 'disputed', 'completed'])->default('pending');
            $table->timestamps();

            // Foreign key constraint referencing users table
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
        
        Schema::create('accounts', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unsigned()->nullable(false);
            $table->bigInteger('currency_id')->unsigned()->nullable(false);
            $table->decimal('balance', 15, 2)->default(0.00);
            $table->timestamps();

            // Foreign key constraints
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('currency_id')->references('id')->on('currencies')->onDelete('cascade');
        });

        Schema::create('transaction_entries', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('transaction_id')->unsigned()->nullable(false);
            $table->bigInteger('account_id')->unsigned()->nullable(false);
            $table->bigInteger('currency_id')->unsigned()->nullable(false);
            $table->enum('type', ['debit', 'credit'])->nullable(false);
            $table->decimal('amount', 15, 2)->nullable(false);
            $table->timestamps();

            // Foreign key constraints
            $table->foreign('transaction_id')->references('id')->on('transactions')->onDelete('cascade');
            $table->foreign('account_id')->references('id')->on('accounts')->onDelete('cascade');
            $table->foreign('currency_id')->references('id')->on('currencies')->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transaction_entries');
        Schema::dropIfExists('accounts');
        Schema::dropIfExists('transactions');
    }
};
