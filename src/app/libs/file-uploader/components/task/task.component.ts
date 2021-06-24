import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";

@Component({
  selector: "ir-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit {
  @Input() name: string = "";
  @Input() progress: number = 0;
  @Input() size: number = 0;
  @Input() downloadUrl?: string;
  @Input() isActive: boolean = false;

  @Output() remove: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onRemoveBtnClicked(id: string): void {
    this.remove.emit(id);
  }
}
