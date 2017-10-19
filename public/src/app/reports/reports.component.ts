import { Component, OnInit, Input } from '@angular/core';
import {MediatorService} from "../mediator.service";
import {KontrollerService} from "../kontroller.service";
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
    @Input() userObject;
    @Input() sm_moduleName;
    display: boolean = false;
    panel_heading: string = "Profile";
    repo_stats = null;
    dummy_Adaptor = [];
    dummy_leader = [];
    userRank = null;
    gami_stats = [];
    rep_leaderBoards = [{"userID":[],"total":[],"points":[], "bounty":[]}];
    transition_stats = {"modules":[],"dataNumOfPosts":[],"dataNumOfVotes":[], "numUpVotes":[],"numDownVotes":[]};
    tbl_format = {"modules":[],"dataNumOfPosts":[],"dataNumOfVotes":[], "numUpVotes":[],"numDownVotes":[]};
    tbl_format_lb = [{"userID":[],"total":[],"points":[], "bounty":[]}];
    mileStonesCompleted = [];
    mileStonesNotCompleted = [];
    mileStones = [];
    leader_selected_module = "Select Module";
    private timer;
    tot_likes = 0;
    constructor(private _kontrolService: KontrollerService, private _mediatorService: MediatorService) { }

    showDialog() {
        this.display = true;
    }

    getReports(x)
    {
        switch (x)
        {
            case 1: this.panel_heading = 'Profile';
                (<HTMLInputElement>document.getElementById("rep_profile")).style.display = "block";
                (<HTMLInputElement>document.getElementById("rep_gami2")).style.display = "none";
                (<HTMLInputElement>document.getElementById("rep_mile")).style.display = "none";
                (<HTMLInputElement>document.getElementById("rep_stats")).style.display = "none";
                (<HTMLInputElement>document.getElementById("rep_subs")).style.display = "none";
                (<HTMLInputElement>document.getElementById("rep_leaderBoards")).style.display = "none";
                break;
            case 2: this.panel_heading = 'Subscriptions';
                document.getElementById("rep_subs").style.display = "block";
                document.getElementById("rep_profile").style.display = "none";
                document.getElementById("rep_mile").style.display = "none";
                document.getElementById("rep_stats").style.display = "none";
                document.getElementById("rep_gami2").style.display = "none";
                document.getElementById("rep_leaderBoards").style.display = "none";
                break;
            case 3: this.panel_heading = 'Gamification';
                (<HTMLInputElement>document.getElementById("rep_gami2")).style.display = "block";
                document.getElementById("rep_profile").style.display = "none";
                document.getElementById("rep_mile").style.display = "none";
                document.getElementById("rep_stats").style.display = "none";
                document.getElementById("rep_subs").style.display = "none";
                document.getElementById("rep_leaderBoards").style.display = "none";
                break;
            case 4: this.panel_heading = 'MileStones';
                document.getElementById("rep_mile").style.display = "block";
                document.getElementById("rep_profile").style.display = "none";
                document.getElementById("rep_gami2").style.display = "none";
                document.getElementById("rep_stats").style.display = "none";
                document.getElementById("rep_subs").style.display = "none";
                document.getElementById("rep_leaderBoards").style.display = "none";
                break;
            case 5: this.panel_heading = 'Statistics';
                (<HTMLInputElement>document.getElementById("rep_stats")).style.display = "block";
                (<HTMLInputElement>document.getElementById("rep_profile")).style.display = "none";
                (<HTMLInputElement>document.getElementById("rep_subs")).style.display = "none";
                (<HTMLInputElement>document.getElementById("rep_mile")).style.display = "none";
                (<HTMLInputElement>document.getElementById("rep_gami2")).style.display = "none";
                (<HTMLInputElement>document.getElementById("rep_leaderBoards")).style.display = "none";
                break;
            case 6: this.panel_heading = 'Statistics';
                (<HTMLInputElement>document.getElementById("rep_leaderBoards")).style.display = "block";
                (<HTMLInputElement>document.getElementById("rep_stats")).style.display = "none";
                (<HTMLInputElement>document.getElementById("rep_profile")).style.display = "none";
                (<HTMLInputElement>document.getElementById("rep_subs")).style.display = "none";
                (<HTMLInputElement>document.getElementById("rep_mile")).style.display = "none";
                (<HTMLInputElement>document.getElementById("rep_gami2")).style.display = "none";
                break;
        }
    }

  ngOnInit() {
      this.timer = setInterval(() => {
          this.refresh_MyReports();
      }, 6000);
  }

    refresh_MyReports()
    {
        if (this.display == true)
        {
            this.rep_gami_stats();
            this.rep_get_mileStones();
            this.rep_leaderBoards_getter();
        }
        if (!sessionStorage.getItem("sessionID"))
        {
            this.repo_stats = null;
            this.display = false;
        }
    }

    rep_get_mileStones()
    {
        this._kontrolService.getMilestones()
            .then(mileStones => {this.mileStones = mileStones; this.getLikes();})
            .catch(err => console.log(err));
    }

    getLikes()
    {
        // this.chechIfAnyMilestonesCompleted();
        this._kontrolService.getTotalLikes(sessionStorage.getItem("sessionID"))
            .then(tot_likes => {this.tot_likes = tot_likes; this.chechIfAnyMilestonesCompleted()})
            .catch(err => console.log(err));
    }

    chechIfAnyMilestonesCompleted()
    {
        this.mileStonesCompleted = [];
        this.mileStonesNotCompleted = [];
        for (var i = 0; i < this.mileStones.length; i++)
        {
            if (this.mileStones[i].milestoneName == "Likes"
                && this.mileStones[i].usersCompletedMilestone.indexOf(sessionStorage.getItem("sessionID")) < 0
                && this.tot_likes > this.mileStones[i].reward)
            {
                this.mileStonesCompleted.push(this.mileStones[i]);
                this.rewarduser(this.mileStones[i].milestoneName, sessionStorage.getItem("sessionID"));
                console.log("award points to user for LIKES milestone");
            }
            else if (this.mileStones[i].milestoneName == "Groups"
                && this.mileStones[i].usersCompletedMilestone.indexOf(sessionStorage.getItem("sessionID")) < 0
                && this.userObject[0].groupsJoinedTo.length > this.mileStones[i].reward)
            {
                {
                    this.mileStonesCompleted.push(this.mileStones[i]);
                    this.rewarduser(this.mileStones[i].milestoneName, sessionStorage.getItem("sessionID"));
                    // alert("award points to user for Group milestone");
                }
            }
            else if (this.mileStones[i].usersCompletedMilestone.indexOf(sessionStorage.getItem("sessionID"))>= 0)
            {
                this.mileStonesCompleted.push(this.mileStones[i]);
            }
            else
                this.mileStonesNotCompleted.push(this.mileStones[i]);
        }
        // for (var i = 0; i < this.mileStones.length; i++)
        // {


        //     else if (this.mileStones[i].usersCompletedMilestone.indexOf(sessionStorage.getItem("sessionID"))>= 0)
        //     {
        //         this.mileStonesCompleted.push(this.mileStones[i]);
        //     }
        //     else
        // this.mileStonesNotCompleted.push(this.mileStones[i]);
        // }

    }

    rewarduser(x: string, y: string)
    {
        this._kontrolService.rewardUser({milestoneName: x, usersCompletedMilestone: y})
            .then(status => {})
            .catch(err => console.log(err));
    }

    manual_refresh()
    {
        if (this.display == true)
        {
            this.statsPerModule();
        }
        if (!sessionStorage.getItem("sessionID"))
        {
            this.repo_stats = null;
            this.display = false;
        }
    }

    rep_gami_stats()
    {
        this._kontrolService.getUserPoints(sessionStorage.getItem("sessionID"))
            .then(repo_stats => {this.repo_stats = repo_stats; this.calculateLevel()})
            .catch(err => console.log(err));
    }

    leader_seleceted_newModule(x: string)
    {
        this.leader_selected_module = x;
        this.rep_leaderBoards_getter();
    }

    rep_leaderBoards_getter()
    {
        if (this.display == true && this.leader_selected_module != "Select Module")
        this._kontrolService.leaderBoard(this.leader_selected_module)
            .then(dummy_leader => {this.dummy_leader = dummy_leader; this.translate_LeaderBoard()})
            .catch(err => console.log(err));
    }

    calculateLevel()
    {
        let ranking = [{goal: 50, desc: "Variable"},
            {goal: 100, desc: "Function"},
            {goal: 200, desc: "Class"},
            {goal: 400, desc: "Library"},
            {goal: 1000, desc: "Language"}];
        let max_index = 0;
        for(let i = 0; i < ranking.length; i++)
            if (this.repo_stats.points >= ranking[i].goal)
            {
                max_index = i;
            }

        this.userRank = ranking[max_index];
        this.userRank.goal *= 2;
        let ratio =  (this.repo_stats.points/this.userRank.goal)*100;
        (<HTMLInputElement>document.getElementById("div_progressBar")).style.width = ratio.toString()+ "%";
    }


  statsPerModule()
  {
      this.dummy_Adaptor = [];
      if (this.userObject.length > 0)
      // for (let i = 0; i < this.userObject.modules.length; i++ )
      {
          this._kontrolService.attempt(sessionStorage.getItem("sessionID"))
              .then(dummy_Adaptor => {
                  this.dummy_Adaptor = dummy_Adaptor;
                  this.toTableFormat()
              })
              .catch(err => console.log(err));
      }

  }

    toTableFormat()
    {
        if (this.dummy_Adaptor.length == 0)
            return ;


        for (let i = 0; i < this.dummy_Adaptor[0].length; i++)
        {
            if (this.transition_stats.modules.indexOf(this.dummy_Adaptor[0][i].module) < 0) {
                this.transition_stats.modules.push(this.dummy_Adaptor[0][i].module);
                this.transition_stats.numUpVotes.push(0);
                this.transition_stats.numDownVotes.push(0);
                this.transition_stats.dataNumOfPosts.push(0);
                this.transition_stats.dataNumOfVotes.push(0);
            }
        }
        for (let i = 0; i < this.dummy_Adaptor[0].length; i++) {
            let spot = this.transition_stats.modules.indexOf(this.dummy_Adaptor[0][i].module);
            this.transition_stats.dataNumOfPosts[spot] = (this.dummy_Adaptor[0][i].numPosts);

        }

        for (let i = 0; i < this.transition_stats.modules.length; i++)
        {
            let spot = this.transition_stats.modules.indexOf(this.dummy_Adaptor[1][i].module);
            if (spot <= 0)
                return ;
            this.transition_stats.numUpVotes[spot] = (this.dummy_Adaptor[1][i].numUpVotes);
            this.transition_stats.numDownVotes[spot] = (this.dummy_Adaptor[1][i].numDownVotes);
            this.transition_stats.dataNumOfVotes[spot] = (this.dummy_Adaptor[1][i].numVotes);
        }
        this.tbl_format.modules = this.transition_stats.modules;
        this.tbl_format.dataNumOfPosts = this.transition_stats.dataNumOfPosts;
        this.tbl_format.dataNumOfVotes = this.transition_stats.dataNumOfVotes;
        this.tbl_format.numUpVotes = this.transition_stats.numUpVotes;
        this.tbl_format.numDownVotes = this.transition_stats.numDownVotes;

        this.data = {
            labels: this.tbl_format.modules,
            datasets: [
                {
                    label: 'Posts',
                    backgroundColor: '#2FFFF5',
                    data: this.tbl_format.dataNumOfPosts
                },
                {
                    label: 'Votes Made',
                    backgroundColor: '#4AA5A5',
                    data: this.tbl_format.dataNumOfVotes
                },
                {
                    label: 'DownVotes',
                    backgroundColor: '#42A5F5',
                    data: this.tbl_format.numDownVotes
                },
                {
                    label: 'Upvotes',
                    backgroundColor: '#5555F5',
                    data: this.tbl_format.numUpVotes
                }
            ]
        }
    }

    translate_LeaderBoard()
    {
        if (this.tbl_format_lb.length == 1)
            this.tbl_format_lb.pop();
        for (let i = 0; this.tbl_format_lb.length < this.dummy_leader.length; i++)
        {
            this.tbl_format_lb.push(this.dummy_leader[i]);
        }
    }

    data = {
        labels: this.tbl_format.modules,
        datasets: [
            {
                label: 'Posts',
                backgroundColor: '#2FFFF5',
                data: this.tbl_format.dataNumOfPosts
            },
            {
                label: 'Votes',
                backgroundColor: '#42A5F5',
                data: this.tbl_format.dataNumOfVotes
            }
        ]
    }

    options = {
        title: {
            display: true,
            text: 'My Title',
            fontSize: 16
        },
        legend: {
            position: 'bottom'
        }
    }

}