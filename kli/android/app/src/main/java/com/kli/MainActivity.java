package com.kli;

import android.Manifest;
import android.app.PendingIntent;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.widget.Toast;

import androidx.core.app.ActivityCompat;

import com.facebook.react.ReactActivity;
import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationRequest;
import com.google.android.gms.location.LocationServices;
import com.karumi.dexter.Dexter;
import com.karumi.dexter.PermissionToken;
import com.karumi.dexter.listener.PermissionDeniedResponse;
import com.karumi.dexter.listener.PermissionGrantedResponse;
import com.karumi.dexter.listener.PermissionRequest;
import com.karumi.dexter.listener.single.PermissionListener;

public class MainActivity extends ReactActivity {

  static MainActivity instance;
  LocationRequest locationRequest;
  FusedLocationProviderClient fusedLocationProviderClient;

  public static MainActivity getInstance() {
    return instance;
  }

  @Override
  protected String getMainComponentName() {
    return "kli";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    instance = this;

    Dexter.withActivity(this).withPermission(Manifest.permission.ACCESS_FINE_LOCATION)
            .withListener(new PermissionListener() {
              @Override
              public void onPermissionGranted(PermissionGrantedResponse response) {
                updateLocation();
              }

              @Override
              public void onPermissionDenied(PermissionDeniedResponse response) {
                Toast.makeText(MainActivity.this, "You must accept this location", Toast.LENGTH_SHORT).show();
              }

              @Override
              public void onPermissionRationaleShouldBeShown(PermissionRequest permission, PermissionToken token) {

              }
            }).check();
  }

  private void updateLocation() {
    buildLocationRequest();

    fusedLocationProviderClient = LocationServices.getFusedLocationProviderClient(this);
    if (ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {

      return;
    }
    fusedLocationProviderClient.requestLocationUpdates(locationRequest, getPendingIntent());
  }

  private PendingIntent getPendingIntent() {
      Intent intent = new Intent(this, MyLocationService.class);
      intent.setAction(MyLocationService.ACTION_PROCESS_UPDATE);
      return PendingIntent.getBroadcast(this, 0, intent, PendingIntent.FLAG_UPDATE_CURRENT);
  }

  private void buildLocationRequest() {
    locationRequest = new LocationRequest();
    locationRequest.setPriority(LocationRequest.PRIORITY_HIGH_ACCURACY);
    locationRequest.setInterval(5000);
    locationRequest.setFastestInterval(3000);
    locationRequest.setSmallestDisplacement(10f);
  }

}
