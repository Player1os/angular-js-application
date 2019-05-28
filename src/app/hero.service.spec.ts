// Load angular modules.
import { TestBed } from '@angular/core/testing'

// Load local modules.
import { HeroService } from './hero.service'

describe('HeroService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({})
	})

	it('should be created', () => {
		const service: HeroService = TestBed.get(HeroService)
		expect(service).toBeTruthy()
	})
})
