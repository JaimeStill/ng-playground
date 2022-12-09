import { Component } from '@angular/core';
import { TabLink } from '../../models';

@Component({
  selector: 'home-route',
  templateUrl: 'home.route.html',
  styleUrls: ['home.route.scss']
})
export class HomeRoute {
  links: TabLink[] = [
    { url: 'material', label: 'Material' },
    { url: 'cdk', label: 'CDK' },
    { url: 'flex-layout', label: 'Flex Layout' },
    { url: 'forms', label: 'Reactive Forms' }
  ]
}
