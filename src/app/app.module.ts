import { NgModule, ErrorHandler,enableProdMode } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetallesPage } from '../pages/detalles/detalles';
import { AddPostPage } from '../pages/add-post/add-post';


enableProdMode();
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetallesPage,
    AddPostPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetallesPage,
    AddPostPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
