// Load angular modules.
import { Location } from '@angular/common'
import {
	Component,
	Input,
	OnInit,
} from '@angular/core'
import { ActivatedRoute } from '@angular/router'

// Load local modules.
import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
	selector: 'app-hero-detail',
	templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {
	@Input() hero: Hero

	constructor(
		private route: ActivatedRoute,
		private heroService: HeroService,
		private location: Location,
	) {}

	ngOnInit(): void {
		this.getHero()
	}

	getHero(): void {
		const id = parseInt(this.route.snapshot.paramMap.get('id'), 10)
		this.heroService.getHero(id).subscribe((hero) => {
			this.hero = hero
		})
	}

	goBack(): void {
		this.location.back()
	}

	save(): void {
		this.heroService.updateHero(this.hero).subscribe(() => {
			this.goBack()
		})
	}
}
