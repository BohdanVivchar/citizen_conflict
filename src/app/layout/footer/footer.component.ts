import { Component } from '@angular/core';
import { SocialsComponent } from '../../shared/components/socials/socials.component';

@Component({
  selector: 'app-footer',
  imports: [SocialsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  links = [
    {
      name: 'Games',
      link: '',
    },
    {
      name: 'Esports',
      link: '',
    },
    {
      name: 'Marketplace',
      link: '',
    },
    {
      name: 'Token',
      link: '',
    },
    {
      name: 'Team',
      link: '',
    },
    {
      name: 'News',
      link: '',
    },
    {
      name: 'Join Discord',
      link: '',
    },
    {
      name: 'ID',
      link: '',
    },
    {
      name: 'Help',
      link: '',
    },
    {
      name: 'Safety and Security',
      link: '',
    },
    {
      name: 'Community Rules',
      link: '',
    },
  ];
  coins = [
    {
      name: 'Kucoin',
      icon: 'icons/coin-icons/kucoin.svg',
    },
    {
      name: 'Uniswap',
      icon: 'icons/coin-icons/uniswap.svg',
    },
    {
      name: 'Bybit',
      icon: 'icons/coin-icons/bybit.svg',
    },
    {
      name: 'Mexc Global',
      icon: 'icons/coin-icons/mexc-global.svg',
    },
  ];
}
