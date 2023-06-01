<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use App\Models\Song;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ArtistController extends Controller
{

    public function index(){
        return Artist::all();
    }

    public function update(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'artistId' => 'integer'
        ]);

        $artist = Artist::findOrFail($validatedData['artistId']);
        $artist->update($validatedData);

        return response()->json(['message' => 'Data updated successfully', 'data' => $artist], 200);
    }

    public function destroy($id)
    {
        $artist = Artist::findOrFail($id);
        $artist->delete();

        return response()->json(['message' => 'Data deleted successfully'], 200);
    }


    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255'
        ]);
        if($validator->fails()){
            return response()->json($validator->messages(), 400);
        }
        $artist = Artist::create([
            'name' => $request->get('name')
        ]);
        return response()->json(['message'=>'Artist Created','data'=>$artist],200);
    }

    public function show(Artist $artist){
        return response()->json(['message'=>'','data'=>$artist],200);
    }

    public function show_songs(Artist $artist){
        return response()->json(['message'=>'','data'=>$artist->songs],200);
    }

    public function show_users(Artist $artist){
            return response()->json(['message'=>'','data'=>$artist->users],200);
    }
}
