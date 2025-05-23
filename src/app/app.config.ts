// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideToastr({
      toastClass: 'cyrrus-toastr',
      positionClass: 'toast-bottom-right',
      timeOut: 3500,
      progressBar: true,
      preventDuplicates: true,
    }),
  ],
};
