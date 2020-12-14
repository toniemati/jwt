<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(5)->create();
        \App\Models\Article::factory(10)->create();
        \App\Models\Category::factory(5)->create();


        $user = [
            'name' => 'admin',
            'email' => 'admin@example.com',
            'password' => bcrypt('test1234'),
        ];

        User::create($user);
    }
}
