import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WorkspaceHeaderComponent } from './header/header.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';
import { PropsComponent } from './props/props.component';
import { TopologyService } from './topology.service';


@NgModule({
  imports: [SharedModule, WorkspaceRoutingModule],
  declarations: [WorkspaceHeaderComponent, WorkspaceComponent, PropsComponent, ContextMenuComponent],
  providers: [TopologyService]
})
export class WorkspaceModule { }