import { Injectable , ErrorHandler} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable(
)
export class CustomErrorHandler implements ErrorHandler {


  constructor(private snackbar : MatSnackBar) { }

  handleError(error: unknown) {
this.snackbar.open(
  'erreur detecté',
  'fermer',
  {
    duration : 2000
  }
);
console.warn('erreur detecté par le handler : ', error)

  }
}
