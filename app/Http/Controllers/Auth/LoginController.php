<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $this->validate($request, $this->rules(), $this->validationErrorMessages());

        $request = Request::create(config('app.url').'/oauth/token', 'POST', [
            'grant_type' => 'password',
            'client_id' => env('CLIENT_ID'),
            'client_secret' => env('CLIENT_SECRET'),
            'username' => $request->email,
            'password' => $request->password,
        ]);

        return app()->handle($request);
    }

    public function logout()
    {
        $accessToken = auth()->user()->token();

        DB::table('oauth_access_tokens')->where('id', $accessToken->id)->delete();
        DB::table('oauth_refresh_tokens')->where('access_token_id', $accessToken->id)->delete();

        return response()->json(['status' => 200]);
    }

    public function refresh(Request $request)
    {
        $refreshToken = $request->headers->get('refreshToken');

        $request = Request::create(config('app.url').'/oauth/token', 'POST', [
            'grant_type' => 'refresh_token',
            'refresh_token' => $refreshToken,
            'client_id' => env('CLIENT_ID'),
            'client_secret' => env('CLIENT_SECRET')
        ]);

        return app()->handle($request);
    }

    protected function rules()
    {
        return [
            'email' => 'required|email',
            'password' => 'required|min:6',
        ];
    }

    protected function validationErrorMessages()
    {
        return [];
    }
}
