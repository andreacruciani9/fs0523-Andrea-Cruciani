import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { CittaSelezionataComponent } from '../../Component/citta-selezionata/citta-selezionata.component';
import { PreferitiComponent } from './preferiti/preferiti.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [DashboardComponent, CittaSelezionataComponent, PreferitiComponent, LogoComponent],
  imports: [CommonModule, DashboardRoutingModule, FormsModule],
})
export class DashboardModule {}
