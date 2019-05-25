// Load angular modules.
import { Injectable } from '@angular/core'

// Load npm modules.
import { InMemoryDbService } from 'angular-in-memory-web-api'

// Load local modules.
import { Hero } from './hero'

const initialId = 11

@Injectable({ providedIn: 'root' })
export class InMemoryDataService implements InMemoryDbService {
	createDb(): { heroes: Hero[] } {
		const heroes = [
			{ id: 11, name: 'Mr. Nice' },
			{ id: 12, name: 'Narco' },
			{ id: 13, name: 'Bombasto' },
			{ id: 14, name: 'Celeritas' },
			{ id: 15, name: 'Magneta' },
			{ id: 16, name: 'RubberMan' },
			{ id: 17, name: 'Dynama' },
			{ id: 18, name: 'Dr IQ' },
			{ id: 19, name: 'Magma' },
			{ id: 20, name: 'Tornado' },
		]
		return { heroes }
	}

	// Overrides the genId method to ensure that a hero always has an id.
	// If the heroes array is empty, the method below returns the initial id.
	// if the heroes array is not empty, the method below returns the highest
	// hero id + 1.
	genId(
		heroes: Hero[],
	): number {
		if (heroes.length > 0) {
			return Math.max(...heroes.map((hero) => {
				return hero.id
			})) + 1
		}
		return initialId
	}
}
