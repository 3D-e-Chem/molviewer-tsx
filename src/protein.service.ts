import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable }    from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

export class RestProtein {
    public id: string;
    public label: string;
    public data: string;
}

export class Protein extends RestProtein {
    public visible: boolean;
    public hetVisible: boolean;
}

function prepProtein(restProtein: RestProtein) {
    const protein = restProtein as Protein;
    protein.visible = true;
    protein.hetVisible = true;
    return protein;
}

@Injectable()
export class ProteinService {
    public visibilityAnnouncer$: Observable<Protein>;
    public heteroVisibilityAnnouncer$: Observable<Protein>;
    private visibilitySource = new Subject<Protein>();
    private heteroVisibilitySource = new Subject<Protein>();
    private proteinsUrl = '/api/proteins';
    private proteinsPromise: Promise<Protein[]>;

    constructor(private http: Http) {
        this.visibilityAnnouncer$ = this.visibilitySource.asObservable();
        this.heteroVisibilityAnnouncer$ = this.heteroVisibilitySource.asObservable();
    }

    public getProteins(): Promise<Protein[]> {
        if (!this.proteinsPromise) {
            this.proteinsPromise = this.http.get(this.proteinsUrl)
                .toPromise()
                .then(response => response.json() as RestProtein[])
                .then(restProteins => restProteins.map(prepProtein));
        }
        return this.proteinsPromise;
    }

    public toggleVisibility(protein: Protein) {
        protein.visible = !protein.visible;
        this.visibilitySource.next(protein);
    }

    public toggleHeteroVisibility(protein: Protein) {
        protein.hetVisible = !protein.hetVisible;
        this.heteroVisibilitySource.next(protein);
    }
}
