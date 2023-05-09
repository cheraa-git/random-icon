import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { IconBtnComponent } from './components/icon-btn/icon-btn.component'

@NgModule({
  declarations: [
    AppComponent,
    IconBtnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
