import { Subject } from 'rxjs';

export interface DynamicComponent {
  close: Subject<null>;
}
