import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { ProjectsRoutingModule, routedComponents } from './projects-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
];

import { ButtonViewComponent } from './categories/categories.component';
import { ImageViewComponent } from './smart-table/smart-table.component';
import { NgbdModalContent } from './smart-table/smart-table.component';
import { NgbdModalContent2 } from './categories/categories.component';


@NgModule({
  imports: [
    ThemeModule,
    ProjectsRoutingModule,
    Ng2SmartTableModule,
    FormsModule
  ],
  declarations: [
    ...routedComponents,
    ...components,
    ButtonViewComponent,
    ImageViewComponent,
    NgbdModalContent,
    NgbdModalContent2
  ],
  entryComponents: [
    ButtonViewComponent,
    ImageViewComponent,
    NgbdModalContent,
    NgbdModalContent2
  ],
  providers: [
    SmartTableService,
  ],
})
export class ProjectsModule { }
