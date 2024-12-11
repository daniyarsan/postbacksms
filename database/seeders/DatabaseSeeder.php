<?php

namespace Database\Seeders;

use App\Models\Country;
use App\Models\Service;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        foreach ($this->getCountryData() as $item) {
            Country::factory()->create($item);
        }

        foreach ($this->getServiceData() as $item) {
            Service::factory()->create($item);
        }

//        User::factory()->create([
//            'name' => 'Test User',
//            'email' => 'test@example.com',
//        ]);
    }

    public function getCountryData() {
        return [
            ['name' => 'Russia', 'code' => 'ru'],
            ['name' => 'United States', 'code' => 'us'],
            ['name' => 'Sweden', 'code' => 'se'],
        ];
    }

    public function getServiceData() {
        return [
            ['name' => 'Whatsapp', 'code' => 'wa'],
            ['name' => 'Telegram', 'code' => 'tg'],
            ['name' => 'Skype', 'code' => 'sk'],
        ];
    }


}
