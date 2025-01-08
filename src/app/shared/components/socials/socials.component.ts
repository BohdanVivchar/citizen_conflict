import { Component } from '@angular/core';

@Component({
  selector: 'app-socials',
  imports: [],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss',
})
export class SocialsComponent {
  socials = [
    {
      link: '',
      icon: 'icons/social-icons/discord.svg',
    },
    {
      link: '',
      icon: 'icons/social-icons/x.svg',
    },
    {
      link: '',
      icon: 'icons/social-icons/telegram.svg',
    },
    {
      link: '',
      icon: 'icons/social-icons/instagram.svg',
    },
    {
      link: '',
      icon: 'icons/social-icons/youtube.svg',
    },
    {
      link: '',
      icon: 'icons/social-icons/twitch.svg',
    },
  ];
}
