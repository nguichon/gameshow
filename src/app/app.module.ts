import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {WelcomeScreenComponent} from './welcome-screen/welcome-screen.component';
import {HostScreenComponent} from './host-screen/host-screen.component';
import {PlayerScreenComponent} from './player-screen/player-screen.component';
import {ScoreboardScreenComponent} from './scoreboard-screen/scoreboard-screen.component';
// import {WaveComponent} from "ng-spin-kit";
import {MillisecondDatePipe} from "./date-with-milliseconds.pipe";
import {OrdinalPipe} from "./ordinal.pipe";

const myFirebaseConfig = {
    apiKey: "AIzaSyCekug-L053u-Rt0-6LeI4797JdFniFb7w",
    authDomain: "game-show-5fced.firebaseapp.com",
    databaseURL: "https://game-show-5fced.firebaseio.com",
    storageBucket: "game-show-5fced.appspot.com",
    messagingSenderId: "37727258953"
};

const appRoutes: Routes = [
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path: 'welcome', component: WelcomeScreenComponent},
    {path: 'host', component: HostScreenComponent},
    {path: 'player', component: PlayerScreenComponent}
];

const myFirebaseAuthConfig = {
    provider: AuthProviders.Google,
    method: AuthMethods.Redirect
};

@NgModule({
    declarations: [
        AppComponent,
        WelcomeScreenComponent,
        HostScreenComponent,
        PlayerScreenComponent,
        ScoreboardScreenComponent,
        MillisecondDatePipe,
        OrdinalPipe
        // WaveComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}