import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { enviroment } from '../enviroments/enviroment';

export const appConfig: ApplicationConfig = {
    providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: enviroment.firebaseConfig.projectId, appId: enviroment.firebaseConfig.appId, storageBucket: enviroment.firebaseConfig.storageBucket, apiKey: enviroment.firebaseConfig.apiKeyy, authDomain: enviroment.firebaseConfig.authDomain, messagingSenderId: enviroment.firebaseConfig.messagingSenderId })), provideFirestore(() => getFirestore())]
};
