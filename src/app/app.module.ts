

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RoadMapsComponent } from './road-maps/road-maps.component';
import { WebMapComponent } from './road-maps/web-map/web-map.component';
import { JavaMapComponent } from './road-maps/java-map/java-map.component';
import { CMapComponent } from './road-maps/c-map/c-map.component';
import { AngularMapComponent } from './road-maps/angular-map/angular-map.component';
import { MysqlMapComponent } from './road-maps/mysql-map/mysql-map.component';
import { PythonMapComponent } from './road-maps/python-map/python-map.component';
import { DSAMapComponent } from './road-maps/dsa-map/dsa-map.component';
import { PhpMapComponent } from './road-maps/php-map/php-map.component';
import { FlutterMapComponent } from './road-maps/flutter-map/flutter-map.component';


@NgModule({
  declarations: [
    AppComponent,
    RoadMapsComponent,
    WebMapComponent,
    JavaMapComponent,
    CMapComponent,
    AngularMapComponent,
    MysqlMapComponent,
    PythonMapComponent,
    DSAMapComponent,
    PhpMapComponent,
    FlutterMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
