import { Injectable } from "@angular/core";
import { asap } from "rxjs/internal/scheduler/asap";

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  constructor() {}

  getTeamMembersSummary(): any[] {
    const getTeamMembersSummary = [
      {
        Region: "East",
        TeamMembarCount: 20,
        TemporarilyUnavailableMembers: 10
      },
      {
        Region: "South",
        TeamMembarCount: 40,
        TemporarilyUnavailableMembers: 15
      },
      {
        Region: "West",
        TeamMembarCount: 6,
        TemporarilyUnavailableMembers: 0
      },
      {
        Region: "North",
        TeamMembarCount: 65,
        TemporarilyUnavailableMembers: 10
      }
    ];

    return getTeamMembersSummary;
  }

  getTeamMembers(): any[] {
    const TeamMembers = [
      {
        Region: "East",
        Members: [
          {
            ID: 1,
            Name: "Gangadhar",
            Status: "Busy"
          },
          {
            ID: 2,
            Name: "Teja",
            Status: "Available"
          },
          {
            ID: 3,
            Name: "SriNidhi",
            Status: "Available"
          },
          {
            ID: 4,
            Name: "Saharsh",
            Status: "Busy"
          }
        ]
      },
      {
        Region: "South",
        Members: [
          {
            ID: 1,
            Name: "South",
            Status: "Available"
          },
          {
            ID: 2,
            Name: "Teja",
            Status: "Busy"
          },
          {
            ID: 3,
            Name: "SriNidhi",
            Status: "Available"
          },
          {
            ID: 4,
            Name: "Saharsh",
            Status: "Available"
          }
        ]
      },
      {
        Region: "West",
        Members: [
          {
            ID: 1,
            Name: "West",
            Status: "Available"
          },
          {
            ID: 2,
            Name: "Teja",
            Status: "Available"
          },
          {
            ID: 3,
            Name: "SriNidhi",
            Status: "Busy"
          },
          {
            ID: 4,
            Name: "Saharsh",
            Status: "Available"
          }
        ]
      },
      {
        Region: "North",
        Members: [
          {
            ID: 1,
            Name: "North",
            Status: "Available"
          },
          {
            ID: 2,
            Name: "Teja",
            Status: "Available"
          },
          {
            ID: 3,
            Name: "SriNidhi",
            Status: "Available"
          },
          {
            ID: 4,
            Name: "Saharsh",
            Status: "Busy"
          }
        ]
      }
    ];
    return TeamMembers;
  }
}
