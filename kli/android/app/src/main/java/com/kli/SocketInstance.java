/*package com.kli;

import android.app.Application;

import com.github.nkzawa.socketio.client.IO;
import com.github.nkzawa.socketio.client.Socket;

import java.net.URISyntaxException;

public class SocketInstance extends Application {
    private Socket iSocket;
    private static final String URL = "http://10.0.0.108:3000";

    @Override
    public void onCreate() {
        super.onCreate();

        try{
            //IO.Options opts = new IO.Options();
            //opts.query = "auth_token=" + authToken;
            iSocket = IO.socket(URL);
        }catch (URISyntaxException e){
            throw new RuntimeException(e);
        }
    }

    public Socket getSocketInstance(){
        return iSocket;
    }
}
*/
package com.kli;

import android.app.Application;

import java.net.URISyntaxException;

import io.socket.client.IO;
import io.socket.client.Socket;

public class SocketInstance extends Application {
    private static SocketInstance socketInstance;

    private SocketInstance(){}

    public Socket getmSocket() {
        return mSocket;
    }

    private Socket mSocket;
    {
        try {
            //Local// mSocket = IO.socket("http://10.0.0.108:3000");
            mSocket = IO.socket("http://191.252.178.120:3000");
        }catch (URISyntaxException e){}
    }

    public static synchronized SocketInstance getSocketInstance(){
        if (socketInstance == null)
            socketInstance = new SocketInstance();
        return socketInstance;
    }
}