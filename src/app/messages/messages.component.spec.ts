// Load angular modules.
import {
	async,
	ComponentFixture,
	TestBed,
} from '@angular/core/testing'

// Load local modules.
import { MessagesComponent } from './messages.component'

describe('MessagesComponent', () => {
	let component: MessagesComponent
	let fixture: ComponentFixture<MessagesComponent>

	beforeEach(async(() => {
		TestBed
			.configureTestingModule({
				declarations: [MessagesComponent],
			})
			.compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(MessagesComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
