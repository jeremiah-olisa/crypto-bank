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

    public function getCurrencyById(int $currencyId)
    {
        return $this->currencyRepository->findOneOrThrow($currencyId, [
            'id',
            'name',
            'code',
            'category',
            'rate',
            'image_url',
            'is_published',
        ]);
    }

    public function delete(int $currencyId)
    {
        return $this->currencyRepository->delete($currencyId);
    }

    public function update(int $currencyId, array $data)
    {
        return $this->currencyRepository->update($currencyId, $data);
    }
}
