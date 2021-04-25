import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TestGuardsComponent } from './components/test-guards/test-guards.component';
import { VigilanteGuard } from './guards/vigilante.guard';
import { ValidateTokenService } from './services/validate-token.service';

const routes: Routes = [
  {
    path: 'testGuard', 
    component:  TestGuardsComponent,
    canActivate: [VigilanteGuard]
  },
  {
    path: 'notFound',
    component: NotFoundComponent 
  }
];

@NgModule({
  providers: [ValidateTokenService],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
