// Load angular modules.
import {
	Component,
	OnInit,
} from '@angular/core'

// Load local modules.
import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
	// selectedHero: Hero
	heroes: Hero[]

	constructor(
		private heroService: HeroService,
	) {}

	ngOnInit(): void {
		this.getHeroes()
	}

	/*
	onSelect(
		hero: Hero,
	): void {
		this.selectedHero = hero
	}
	*/

	getHeroes(): void {
		this.heroService.getHeroes().subscribe((heroes) => {
			this.heroes = heroes
		})
	}

	add(
		name: string,
	): void {
		name = name.trim()
		if (name === '') {
			return
		}

		this.heroService.addHero({ name } as Hero).subscribe((hero) => {
			this.heroes.push(hero)
		})
	}

	delete(
		hero: Hero,
	): void {
		this.heroes = this.heroes.filter((heroItem) => {
			return heroItem !== hero
		})
		this.heroService.deleteHero(hero).subscribe()
	}
}
