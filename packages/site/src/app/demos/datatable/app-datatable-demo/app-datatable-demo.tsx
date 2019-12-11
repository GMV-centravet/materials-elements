import { Sort } from '@materials-elements/core/dist/types/components/datatable/sort';
import { Component, Element, h, State } from '@stencil/core';

// import 'materials-snackbar-controller';

@Component({
  tag: 'app-datatable-demo',
  styleUrl: 'app-datatable-demo.scss',
})
export class AppDatatableDemo {



  @State() carList = [{
    'car_model': 'XLR-V',
    'car_maker': 'Cadillac',
    'car_model_year': 2007,
    'car_vin': 'WAUEL74F36N267842',
    'car_city': 'Tokonou',
    'car_country': 'Guinea'
  }, {
    'car_model': 'Murciélago',
    'car_maker': 'Lamborghini',
    'car_model_year': 2009,
    'car_vin': 'JTEBU4BF7AK843720',
    'car_city': 'Oljoq',
    'car_country': 'China'
  }, {
    'car_model': 'Mentor',
    'car_maker': 'Kia',
    'car_model_year': 1997,
    'car_vin': 'JN8AZ1MU6DW317138',
    'car_city': 'Çepan',
    'car_country': 'Albania'
  }, {
    'car_model': 'TrailBlazer',
    'car_maker': 'Chevrolet',
    'car_model_year': 2002,
    'car_vin': 'JH4KA96693C434358',
    'car_city': 'Turkestan',
    'car_country': 'Kazakhstan'
  }, {
    'car_model': 'Fleetwood',
    'car_maker': 'Cadillac',
    'car_model_year': 1994,
    'car_vin': 'WBAUP7C50AV016102',
    'car_city': 'Changning',
    'car_country': 'China'
  }, {
    'car_model': 'Prizm',
    'car_maker': 'Geo',
    'car_model_year': 1993,
    'car_vin': '2T1BPRHE2FC423847',
    'car_city': 'Onueke',
    'car_country': 'Nigeria'
  }, {
    'car_model': 'GTI',
    'car_maker': 'Volkswagen',
    'car_model_year': 2005,
    'car_vin': 'WAUDF78E98A214075',
    'car_city': 'Haapsalu',
    'car_country': 'Estonia'
  }, {
    'car_model': 'V50',
    'car_maker': 'Volvo',
    'car_model_year': 2006,
    'car_vin': '2GKALMEK2F6625646',
    'car_city': 'Liqi',
    'car_country': 'China'
  }, {
    'car_model': 'Sephia',
    'car_maker': 'Kia',
    'car_model_year': 1999,
    'car_vin': 'WAU2MAFC4EN972860',
    'car_city': 'Wang Sai Phun',
    'car_country': 'Thailand'
  }, {
    'car_model': 'D250 Club',
    'car_maker': 'Dodge',
    'car_model_year': 1993,
    'car_vin': 'WAUKH98E27A142213',
    'car_city': 'Chumphon',
    'car_country': 'Thailand'
  }];

  @State() rowChecked: boolean;
  @State() allChecked: boolean;
  @State() first = 1;
  @State() last = 10;
  @State() total = 500;

  @Element() host: HTMLElement;
  private snackbarController = new HTMLMaterialsSnackbarControllerElement();

  /**
   * Capturer l'event de page suivante
   */
  handleNextPage() {
    // Appel http => maj list
    if (this.last < this.total) {
      this.last += 10;
      this.first += 10;
    }
  }

  /**
   * Capturer l'event de page précedente
   */
  handlePreviousPage() {
    // Appel http => maj list
    if (this.first > 1) {
      this.last -= 10;
      this.first -= 10;
    }
  }

  /**
   * Capturer l'event de sélection d'une ligne
   * @param event
   */
  changeCheckBoxRowEventHandler(event: any, car) {
    this.snackbarController.create({
      label: `Car : ${car.car_model} : ${car.car_vin} , checked : ${event.detail}`
    });
  }

  /**
   * Capturer l'event de sélection multiple
   * La gestion de l'ensemble des lignes du tableau doit être faite à la main comme ci dessous
   * @param event
   */
  changeCheckBoxHeaderEventHandler(event) {
    this.rowChecked = this.allChecked = event.detail;
    alert('All cars, checked : ' + event.detail);
  }

  /**
   * Capturer l'event du sort
   * La gestion de la prop sorted doit être faite à la main comme ci dessous
   * @param sort
   */
  sortEventHandler(sort: Sort) {
    alert('Sort : ' + sort.columnName + ', ' + sort.sortDirection);
  }

  render() {
    return (
      <materials-datatable style={{ 'height': '100%' }} dense onSort={(sort) => this.sortEventHandler(sort.detail)}>
        <materials-datatable-header slot="header"
          selectable
          selected={this.allChecked}
          onSelectAll={(event) => this.changeCheckBoxHeaderEventHandler(event)}>
          <materials-datatable-header-column
            label="model"
            value="model"
            description="Modèle"
            sortable
          ></materials-datatable-header-column>
          <materials-datatable-header-column
            label="maker"
            value="maker"
            description="Fabriquant"
          ></materials-datatable-header-column>
          <materials-datatable-header-column
            width="120px"
            label="model year"
            value="modelYear"
            description="Année de fabrication"
            sortable
            align="center"
          ></materials-datatable-header-column>
          <materials-datatable-header-column
            width="80px"
            label="status"
            value="status"
            description="Statut"
            align="center"
          ></materials-datatable-header-column>
          <materials-datatable-header-column
            align="end"
            label="country"
            value="country"
            sortable
            description="Pays"
          ></materials-datatable-header-column>
          <materials-datatable-header-column
            label="city"
            value="city"
            description="Ville"
            sortable
          ></materials-datatable-header-column>
          <materials-datatable-header-column
            label="vin"
            value="vin"
            description="Identifiant"></materials-datatable-header-column>
          <materials-datatable-header-column ></materials-datatable-header-column>
          <materials-datatable-header-column ></materials-datatable-header-column>
        </materials-datatable-header>
        <materials-datatable-body slot="body">
          {this.carList.map(car =>
            <materials-datatable-body-row
              selectable
              expendable
              selected={this.rowChecked}
              onSelectRow={(event) => this.changeCheckBoxRowEventHandler(event, car)}>
              <materials-datatable-body-cell >{car.car_model}</materials-datatable-body-cell>
              <materials-datatable-body-cell>{car.car_maker}</materials-datatable-body-cell>
              <materials-datatable-body-cell align="center" width="120px">{car.car_model_year}</materials-datatable-body-cell>
              <materials-datatable-body-cell align="center" width="80px">
                <materials-icon-button icon="favorite" ></materials-icon-button>
              </materials-datatable-body-cell>
              <materials-datatable-body-cell align="end">{car.car_country}</materials-datatable-body-cell>
              <materials-datatable-body-cell>{car.car_city}</materials-datatable-body-cell>
              <materials-datatable-body-cell>{car.car_vin}</materials-datatable-body-cell>
              <materials-datatable-body-cell align="end">
                <materials-icon-button icon="close" large></materials-icon-button>
                <materials-icon-button icon="list" large></materials-icon-button>
              </materials-datatable-body-cell>
              <materials-datatable-body-cell>
                <materials-dropdown menu-position="BOTTOM_START" icon="more_vert" icon-only>
                  <materials-list-item>
                    <a target="_blank" href="#item1">Item 1</a>
                  </materials-list-item>
                  <materials-list-item divider></materials-list-item>
                  <materials-list-item>
                    <a target="_blank" href="#item1">Item 2</a>
                  </materials-list-item>
                </materials-dropdown>
              </materials-datatable-body-cell>
              <div slot="expendable-content">
                Détail de la row
              </div>
            </materials-datatable-body-row>
          )}
        </materials-datatable-body>

        <materials-datatable-footer slot="footer">
          <materials-datatable-pagination
            first={this.first}
            last={this.last}
            total={this.total}
            onNextPage={() => this.handleNextPage()}
            onPreviousPage={() => this.handlePreviousPage()}></materials-datatable-pagination>
        </materials-datatable-footer>
      </materials-datatable>
    );
  }
}
