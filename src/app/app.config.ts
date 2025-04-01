import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideNgIconsConfig } from '@ng-icons/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    provideNgIconsConfig({
      size: "1.5em",
    }), provideFirebaseApp(() => initializeApp({
      "projectId":"nucleo-aw",
      "appId":"1:814475378327:web:6978ca15511fcd4f67b3d2",
      "storageBucket":"nucleo-aw.firebasestorage.app",
      "apiKey":"AIzaSyAXKxWxq_EvulTDl4tTfWVIBIx59Rhr5Cw",
      "authDomain":"nucleo-aw.firebaseapp.com",
      "messagingSenderId":"814475378327"})),
       provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), 

  ]
};
