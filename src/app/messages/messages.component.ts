// Load angular modules.
import { Component } from '@angular/core'

// Load local modules.
import { MessageService } from '../message.service'

@Component({
	selector: 'app-messages',
	templateUrl: './messages.component.html',
	styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
	constructor(
		public messageService: MessageService,
	) {}
}
