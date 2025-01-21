<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateCurrencyRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'string',
                Rule::unique('currencies', 'name')->ignore(request()->data('id')), // Ignore if updating the same record
            ],
            'code' => [
                'required',
                'string',
                'min:1',
                'max:5',
                Rule::unique('currencies', 'code')->ignore(request()->data('id')), // Ignore if updating the same record
            ],
            'category' => 'required|string',
            'is_published' => 'required|boolean',
            'image_url' => 'required|url',
            'rate' => 'required|numeric|min:0|max:100',
        ];
    }

    /**
     * Get custom messages for validator errors.
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Currency Name is required.',
            'name.unique' => 'Currency Name must be unique.',
            'code.required' => 'Currency Code is required.',
            'code.unique' => 'Currency Code must be unique.',
            'category.required' => 'Category is required.',
            'is_published.required' => 'Is Published is required.',
            'image_url.url' => 'Image URL must be a valid URL.',
        ];
    }
}
