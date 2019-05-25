// Load angular modules.
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

// Load npm modules.
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'

// Load local modules.
import { InMemoryDataService } from './in-memory-data.service'

// Load angular support modules.
import { AppRoutingModule } from './app-routing.module'

// Load angular component modules.
import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { HeroSearchComponent } from './hero-search/hero-search.component'
import { HeroesComponent } from './heroes/heroes.component'
import { MessagesComponent } from './messages/messages.component'

@NgModule({
	imports: [
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		HttpClientModule,
		// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
		// and returns simulated server responses.
		// Remove it when a real server is ready to receive requests.
		HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
	],
	declarations: [
		AppComponent,
		DashboardComponent,
		HeroDetailComponent,
		HeroSearchComponent,
		HeroesComponent,
		MessagesComponent,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
