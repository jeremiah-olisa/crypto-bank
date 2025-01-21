<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCurrencyRequest;
use App\Http\Requests\UpdateCurrencyRequest;
use App\Services\CurrencyService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CurrencyController extends Controller
{
    protected CurrencyService $currencyService;

    /**
     * Create a new controller instance.
     */
    public function __construct(CurrencyService $currencyService)
    {
        $this->currencyService = $currencyService;
    }

    /**
     * Example method for listing resources.
     */
    public function index(Request $request)
    {
        $res = $this->currencyService->paginated($request->query(), $request->query('per_page', 15));
        [$data, $paginated] = $this->paginated_response($res);

        return Inertia::render("Currency/List", ["currencies" => $data, 'paginated' => $paginated]);
    }

    /**
     * Example method for showing a single resource.
     */
    public function create()
    {
        return Inertia::render("Currency/CreateCurrency");
    }

    public function store(StoreCurrencyRequest $request)
    {

        $payload  = $request->validated();
        $data = $this->currencyService->create($payload);
        if ($request->wantsJson())
            return $this->api_response("New Currency listed successfully", ['data' => $data]);

        return redirect()->route('currency.list')
            ->with('success', 'New Currency listed successfully');
    }

    public function edit(int $currencyId, Request $request)
    {

        $currency = $this->currencyService->getCurrencyById($currencyId);

        if ($request->wantsJson())
            return $this->api_response("Currency retrived successfully", ['data' => $currency]);

        return Inertia::render("Currency/CreateCurrency");
    }

    public function update(int $currencyId, UpdateCurrencyRequest $request)
    {

        $payload  = $request->validated();
        $currency = $this->currencyService->create($payload);

        if ($request->wantsJson())
            return $this->api_response("Currency update successfully", ['data' => $currency]);

        return redirect()->route('currency.list')
            ->with('success', 'Currency updated successfully');
    }
}
