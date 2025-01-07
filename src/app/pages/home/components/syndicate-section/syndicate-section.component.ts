import { Component } from '@angular/core';
import { SYNDICATES } from './mock/syndicates';

@Component({
  selector: 'app-syndicate-section',
  imports: [],
  templateUrl: './syndicate-section.component.html',
  styleUrl: './syndicate-section.component.scss',
})
export class SyndicateSectionComponent {
  syndicates = SYNDICATES;
}
