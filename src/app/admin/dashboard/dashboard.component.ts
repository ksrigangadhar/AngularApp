import { Component, OnInit } from "@angular/core";
import { DashboardService } from "../../dashboard.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  Designation: string;
  Username: string;
  NoOfteamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCost: number;
  CurrentExpenditure: number;
  AvailableFunds: number;

  Clients: string[];
  Projects: string[];
  Years: number[] = [];
  TeamMembersSummary = [];
  TeamMembers = [];
  TodayDate: Date;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.TodayDate = new Date(Date.now());
    this.Designation = "Team Leader";
    this.Username = "Gangadhar";
    this.NoOfteamMembers = 8;
    this.TotalCostOfAllProjects = 10;
    this.PendingTasks = 0;
    this.UpComingProjects = 50;
    this.ProjectCost = 50000;
    this.CurrentExpenditure = 40000;
    this.AvailableFunds = 4500000;

    this.Clients = [
      "iSpatial Techno Solutions",
      "Trust Technical Services",
      "Raqmiyat LLC"
    ];

    this.Projects = ["Project A", "Project B", "Project C"];

    for (let i = 2000; i <= 2020; i++) {
      this.Years.push(i);
    }

    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();
    this.TeamMembers = this.dashboardService.getTeamMembers();
  }

  onProjectChange(event) {
    const selectedValue = event.target.innerHTML;
    if (selectedValue === "Project A") {
      this.ProjectCost = 12500;
      this.CurrentExpenditure = 245160;
      this.AvailableFunds = 500000;
    }
    if (selectedValue === "Project B") {
      this.ProjectCost = 23564;
      this.CurrentExpenditure = 56478;
      this.AvailableFunds = 125478;
    }
    if (selectedValue === "Project C") {
      this.ProjectCost = 65478;
      this.CurrentExpenditure = 35749;
      this.AvailableFunds = 954632;
    }
  }
}
