// Load angular modules.
import {
	Component,
	OnInit,
} from '@angular/core'

// Load npm modules.
import {
	Observable,
	Subject,
} from 'rxjs'
import {
	debounceTime,
	distinctUntilChanged,
	switchMap,
} from 'rxjs/operators'

// Load local modules.
import { Hero } from '../hero'
import { HeroService } from '../hero.service'

const delayTimeMs = 300

@Component({
	selector: 'app-hero-search',
	templateUrl: './hero-search.component.html',
	styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent implements OnInit {
	heroes$: Observable<Hero[]>
	private searchTerms = new Subject<string>()

	constructor(
		private heroService: HeroService,
	) {}

	ngOnInit(): void {
		this.heroes$ = this.searchTerms.pipe(
			// Wait the preset amount of ms after each keystroke before considering the term.
			debounceTime(delayTimeMs),
			// Ignore new term if same as previous term.
			distinctUntilChanged(),
			// Switch to new search observable each time the term changes.
			switchMap((term: string) => {
				return this.heroService.searchHeroes(term)
			})
		)
	}

	// Push a search term into the observable stream.
	search(
		term: string
	): void {
		this.searchTerms.next(term)
	}
}
