<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class RefreshCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:refresh';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Refresh db routine';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Empty Database...');
        Artisan::call('migrate:fresh', [
            '--force' => true,
        ]);

        $this->info('Seeding...');
        Artisan::call('db:seed', [
            '--force' => true,
        ]);

        return self::SUCCESS;
    }
}
