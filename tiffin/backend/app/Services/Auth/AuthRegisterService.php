<?php

namespace App\Services\Auth;

use App\Models\User;

class AuthRegisterService
{
  public function main(array $parameters): void
  {
    $user = new User();
    $user->name = $parameters['name'];
    $user->email = $parameters['email'];
    $user->password = bcrypt($parameters['password']);
    $user->save();
  }
}
