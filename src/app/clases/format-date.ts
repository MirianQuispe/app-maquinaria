export class FormatDate {
    public MY_FORMATS_ANIO = {
        parse: {
          dateInput: 'YYYY',
        },
        display: {
          dateInput: 'YYYY',
          dateA11yLabel: 'LL',
        },
    };

    MY_FORMATS_MES_ANIO = {
        parse: {
          dateInput: 'MM/YYYY',
        },
        display: {
          dateInput: 'MM/YYYY',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
        },
    };

    MY_FORMATS_DIA_MES_ANIO = {
        parse: {
          dateInput: 'DD/MM/YYYY',
        },
        display: {
          dateInput: 'DD/MM/YYYY'
        },
      };

}