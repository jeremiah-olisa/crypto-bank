<?php

namespace App\Services;

use App\Repositories\CurrencyRepository;

class CurrencyService
{
    protected CurrencyRepository $currencyRepository;

    /**
     * Create a new class instance.
     */
    public function __construct(CurrencyRepository $currencyRepository)
    {
        $this->currencyRepository = $currencyRepository;
    }

    public function create(array $data)
    {
        return $this->currencyRepository->create($data);
    }
    public function paginated(array $queryParam, int $perPage = 15)
    {
        return $this->currencyRepository->advancedCursorPaginate($queryParam, $perPage);
    }
}
