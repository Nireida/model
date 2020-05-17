import { NgModule }                  from '@angular/core';
import { CommonModule }              from '@angular/common';
import { BrandBookNewComponent }     from './brand-book-new.component';
import { BrandBookNewRoutingModule } from './brand-book-new-routing.module';
import { LogoComponent }             from './components/logo/logo.component';
import { DashboardComponent }        from './components/dashboard/dashboard.component';
import { DashboardsComponent }       from './components/dashboards/dashboards.component';
import { PaletteComponent }          from './components/palette/palette.component';
import { FontComponent }             from './components/font/font.component';
import { DocumentationComponent }    from './components/documentation/documentation.component';
import { SignatureComponent }        from './components/signature/signature.component';
import { SouvenirsComponent }       from './components/souvenirs/souvenirs.component';
import { BadLogoComponent }         from './components/bad-logo/bad-logo.component';
import { BadPaletteComponent }      from './components/bad-palette/bad-palette.component';
import { NzModalModule }            from 'ng-zorro-antd/modal';
import { TagsComponent }            from './components/tags/tags.component';
import { ContactsComponent }        from './components/contacts/contacts.component';
import { FontDisplayNoneDirective } from './components/font/font-display-none.directive';
import { NzButtonModule }           from 'ng-zorro-antd/button';
import { NzPaginationModule }       from 'ng-zorro-antd/pagination';
import { OpenCloseComponent }       from './components/open-close/open-close.component';
import { NzLayoutModule }           from 'ng-zorro-antd/layout';
import { AnimationModule }          from './components/open-close/vacancy-animation/animation.module';

@NgModule({
  imports: [
    CommonModule,
    BrandBookNewRoutingModule,
    NzModalModule,
    NzButtonModule,
    NzPaginationModule,
    NzLayoutModule,
    AnimationModule
  ],
  declarations: [
    BrandBookNewComponent,
    DashboardsComponent,
    LogoComponent,
    DashboardComponent,
    PaletteComponent,
    FontComponent,
    DocumentationComponent,
    SignatureComponent,
    SouvenirsComponent,
    BadLogoComponent,
    BadPaletteComponent,
    TagsComponent,
    ContactsComponent,
    FontDisplayNoneDirective,
    OpenCloseComponent
  ],
  entryComponents: [BadLogoComponent, BadPaletteComponent]
})
export class BrandBookNewModule {
}
