import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./admin/dashboard/dashboard.component";
import { AboutComponent } from "./admin/about/about.component";

const routes: Routes = [
  { path: "", component: DashboardComponent, pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
