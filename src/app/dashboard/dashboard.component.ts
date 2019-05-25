// Load angular modules.
import {
	Component,
	OnInit,
} from '@angular/core'

// Load local modules.
import { Hero } from '../hero'
import { HeroService } from '../hero.service'

const heroesCount = 4

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
	heroes: Hero[] = []

	constructor(
		private heroService: HeroService,
	) {}

	ngOnInit(): void {
		this.getHeroes()
	}

	getHeroes(): void {
		this.heroService.getHeroes()
			.subscribe((heroes) => {
				this.heroes = heroes.slice(1, 1 + heroesCount)
			})
	}
}
