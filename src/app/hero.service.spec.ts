// Load angular modules.
import {
	inject,
	TestBed,
} from '@angular/core/testing'

// Load local modules.
import { HeroService } from './hero.service'

describe('HeroService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [HeroService],
		})
	})

	it('should be created', inject([HeroService], (service: HeroService) => {
		expect(service).toBeTruthy()
	}))
})
