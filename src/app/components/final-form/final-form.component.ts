import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreatedTableInfoService } from 'src/app/core/services/created-table-info.service';
import { GetDestinationDataService } from 'src/app/core/services/get-destination-data.service';
import { GetSourceDataService } from 'src/app/core/services/get-source-data.service';

@Component({
  selector: 'app-final-form',
  templateUrl: './final-form.component.html',
  styleUrls: ['./final-form.component.scss'],
})
export class FinalFormComponent implements OnInit {
  timerSubscription!: Subscription;
  isTableCreated = true;
  tableInfo = {
    tableName: '',
    numRows: 0,
  };

  sourceDatas = {
    storageAccount: '',
    containerName: '',
    accessKey: '',
  };

  destinationDatas = {
    accountidentifier: '',
    user: '',
    password: '',
    database_name: '',
    schema_name: '',
    warehouse_name: '',
  };

  constructor(
    private getSourceDataService: GetSourceDataService,
    private getDestinationDataService: GetDestinationDataService,
    private createdTableInfoService: CreatedTableInfoService
  ) {
    this.getSourceDataService.getAll().subscribe((data: any) => {
      if (!data.error) {
        this.sourceDatas = data.data.data[0];
        console.log("===================")
        console.log(data.data.data[0])
        console.log("===================")
      }
    });

    this.getDestinationDataService.getAll().subscribe((data: any) => {
      if (!data.error) {
        this.destinationDatas = data.data.data[0];
      }
    });

  }

  index = 2;
  disable = false;
  onIndexChange(index: number): void {
    this.index = index;
  }
  ngOnInit(): void {
    this.callApi();
  }

  callApi() {
    // timer(0, 10000) call the function immediately and every 10 seconds
    this.timerSubscription = timer(0, 5000)
      .pipe(
        map(() => {
          this.loadTableData(); // load data contains the http request

        })
      )
      .subscribe();
  }

  loadTableData() {
    console.log(this.sourceDatas.storageAccount);
    this.createdTableInfoService
      .getAll(
        this.sourceDatas.storageAccount,
        '/',
        this.sourceDatas.containerName
      )
      .subscribe((data: any) => {
        if (!data.error) {
          this.isTableCreated = false;
          this.tableInfo = data.data[0];
          console.log(data.data[0]);
          if (!this.isTableCreated) {
            this.ngOnDestroy();
            // this.timerSubscription.unsubscribe();
          }
        }
      });
  }
  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }
}
