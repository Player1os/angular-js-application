// Load angular modules.
import { TestBed } from '@angular/core/testing'

// Load local modules.
import { MessageService } from './message.service'

describe('MessageService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({})
	})

	it('should be created', () => {
		const service: MessageService = TestBed.get(MessageService)
		expect(service).toBeTruthy()
	})
})
