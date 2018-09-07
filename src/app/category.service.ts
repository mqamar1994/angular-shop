import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('/categories').snapshotChanges()
      .pipe(map(items => {
        return items.map(a => {
          const data = a.payload.val();
          const key = a.payload.key;
          return { key, ...data };
        });
      }));
  }

}
