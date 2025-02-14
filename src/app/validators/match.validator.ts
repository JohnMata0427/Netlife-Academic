import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function matchValidator(
  controlName: string,
  matchingControlName: string,
): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);

    console.log(control, matchingControl);
    
    return control?.value !== matchingControl?.value ? { mustMatch: true } : null;
  };
}
