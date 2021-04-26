package com.kli;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.location.Location;
import android.os.Build;
import android.os.Bundle;
import android.widget.Toast;

import androidx.annotation.RequiresApi;

import com.google.android.gms.location.LocationResult;
import org.bson.BasicBSONObject;
import org.json.JSONException;
import org.json.JSONObject;

import java.net.URISyntaxException;
import java.time.Instant;
import java.util.Date;

import io.realm.Realm;
import io.realm.RealmConfiguration;
import io.socket.client.IO;
import io.socket.client.Socket;

@RequiresApi(api = Build.VERSION_CODES.O)
public class MyLocationService extends BroadcastReceiver {

    public static final String ACTION_PROCESS_UPDATE = "com.kli.UPDATE_LOCATION";

    /*private Socket mSocket;
    {
        try {
            mSocket = IO.socket("http://10.0.0.108:3000");
        }catch (URISyntaxException e){}
    }*/
    private SocketInstance socketInstance = SocketInstance.getSocketInstance();



    JSONObject jsonObject = new JSONObject();
    //Instant instant = Instant.now();
    //String date = Instant.now().toString();


    //RealmConfiguration realmConfig = new RealmConfiguration.Builder(this).name("Repository").build();
    //Realm realm = Realm.getDefaultInstance();
    //Repository repository = realm.where(Repository.class).equalTo("id", 1).findFirst();




    @Override
    public void onReceive(Context context, Intent intent) {

        Realm.init(context);
        RealmConfiguration realmConfig = new RealmConfiguration.Builder().name("Repository").build();
        Realm realm = Realm.getDefaultInstance();
        Repository repository = realm.where(Repository.class).equalTo("id", 1).findFirst();

        /*SocketInstance instance = new SocketInstance();
        Socket mSocket = instance.getSocketInstance();
        mSocket.connect();
        if(mSocket.connected()){
            Toast.makeText(context, "Socket Connected!!", Toast.LENGTH_SHORT).show();
        }*/

        //mSocket.connect();
        Socket mSocket = socketInstance.getmSocket();
        mSocket.connect();

        if(intent != null && repository!= null){
            final String action = intent.getAction();

            if (ACTION_PROCESS_UPDATE.equals(action)){
                LocationResult result = LocationResult.extractResult(intent);
                if (result != null){
                    Location location = result.getLastLocation();
                    String location_string = new StringBuilder(""+location.getLatitude())
                            .append("/")
                            .append(location.getLongitude())
                            .toString();

                    try {
                        //char quotes ='"';
                        jsonObject.put("codigo", repository.code);
                        jsonObject.put("date", Instant.now().toString());
                        jsonObject.put("latitude", location.getLatitude());
                        jsonObject.put("longitude", location.getLongitude());
                    }catch (JSONException e){
                        e.printStackTrace();
                    }

                    try {
                        //Toast.makeText(context, location_string, Toast.LENGTH_SHORT).show();
                        //mSocket.emit("join", location_string);
                        // mSocket.emit("join", jsonObject.toString());
                        mSocket.emit("joinMaster", repository.code);
                        mSocket.emit("location", jsonObject.toString());
                        //mSocket.emit("location", jsonObject);

                    }catch (Exception e){
                        Toast.makeText(context, location_string, Toast.LENGTH_SHORT).show();
                    }
                }
            }
        }
    }
}
