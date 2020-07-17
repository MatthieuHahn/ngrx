import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';

import { HttpClientModule } from '@angular/common/http';
import { reducers } from './core/store/reducers';
import { effects } from './core/store/effects';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true } }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
