// Load angular modules.
import {
	async,
	ComponentFixture,
	TestBed,
} from '@angular/core/testing'

// Load local modules.
import { HeroDetailComponent } from './hero-detail.component'

describe('HeroDetailComponent', () => {
	let component: HeroDetailComponent
	let fixture: ComponentFixture<HeroDetailComponent>

	beforeEach(async(() => {
		TestBed
			.configureTestingModule({
				declarations: [HeroDetailComponent],
			})
			.compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(HeroDetailComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
