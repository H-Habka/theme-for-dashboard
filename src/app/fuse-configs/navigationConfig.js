import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'applications',
    title: 'Applications',
    translate: 'APPLICATIONS',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'example-component1',
        title: 'test1',
        translate: '',
        type: 'item',
        icon: 'whatshot',
        url: 'users',
        auth:["admin"]
      },
      {
        id: 'example-component2',
        title: 'test2',
        translate: '',
        type: 'item',
        icon: 'whatshot',
        url: 'example',
        auth:["user"]
      },
      {
        id: 'example-component3',
        title: 'test3',
        translate: '',
        type: 'item',
        icon: 'whatshot',
        url: 'pages/profile',
      },
      {
        id: 'example-component4',
        title: 'test4',
        translate: '',
        type: 'item',
        icon: 'whatshot',
        url: 'test',
      },
    ],
  },
];

export default navigationConfig;
