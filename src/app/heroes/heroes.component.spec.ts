// Load angular modules.
import {
	async,
	ComponentFixture,
	TestBed,
} from '@angular/core/testing'

// Load local modules.
import { HeroesComponent } from './heroes.component'

describe('HeroesComponent', () => {
	let component: HeroesComponent
	let fixture: ComponentFixture<HeroesComponent>

	beforeEach(async(() => {
		TestBed
			.configureTestingModule({
				declarations: [HeroesComponent],
			})
			.compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(HeroesComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
