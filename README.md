# follow-mouse-images

![follow-mouse-images](https://i.makeagif.com/media/3-12-2022/WpUaRe.gif?raw=true)
[![NPM](https://img.shields.io/npm/v/follow-mouse-images.svg)](https://www.npmjs.com/package/follow-mouse-images) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save follow-mouse-images
```

## Usage

```jsx
import React, { Component } from 'react'

import FollowMouseImages from 'follow-mouse-images'
import 'follow-mouse-images/dist/index.css'

function App() {
  const arrayData = [
    {
      id: 1,
      title: 'SHOP PROJECT',
      img: 'https://i0.wp.com/themes.svn.wordpress.org/tc-e-commerce-shop/0.8.6/screenshot.png'
    },
    {
      id: 2,
      title: 'BLOG PROJECT',
      img: 'https://www.wppourlesnuls.com/wp-content/uploads/2018/02/theme-blog-wordpress.jpg'
    },
    {
      id: 3,
      title: 'MUSIC PROJECT',
      img: 'https://engineering.atspotify.com/wp-content/uploads/sites/2/2019/03/spotify-web-player.jpg'
    },
    {
      id: 4,
      title: 'SPORT PROJECT',
      img: 'https://cdn.dribbble.com/users/3342689/screenshots/6990988/fitness-.png'
    },
    {
      id: 5,
      title: 'HOUSE PROJECT',
      img: 'https://cdn.dribbble.com/users/6047818/screenshots/16986984/media/d586faf15273ebff158fa954e191a098.png?compress=1&resize=1200x900&vertical=top'
    },
    {
      id: 6,
      title: 'CAR PROJECT',
      img: 'https://cdn.dribbble.com/users/3342689/screenshots/6734350/bmw-.png?compress=1&resize=800x600&vertical=top'
    },
    {
      id: 7,
      title: 'FURNI PROJECT',
      img: 'https://cdn.dribbble.com/users/7626204/screenshots/17699248/media/ae90e53ff599e381cb4e0847a1d49ee6.jpg?compress=1&resize=1200x900&vertical=top'
    },
    {
      id: 8,
      title: 'HOME PROJECT',
      img: 'https://cdn.dribbble.com/users/7626204/screenshots/17671534/media/96cccd6f43950a5c26c25f0bf37e0861.jpg?compress=1&resize=1200x900&vertical=top'
    },
    {
      id: 9,
      title: 'BAKERY PROJECT',
      img: 'https://cdn.dribbble.com/users/7626204/screenshots/17635625/media/4b66902e8a0867de0f7abd26dace6a4f.jpg?compress=1&resize=1000x750&vertical=top'
    }
  ]
  //when click on item
  const handleClick = (e) => {
    console.log(e)
  }
  const config = {
    onClick: handleClick,
    textColor: '#fff',
    background: '#ffb400',
    width: 350,
    height: 230
  }
  return (
    <div>
      <FollowMouseImages data={arrayData} {...config} />
    </div>
  )
}
```

## API

    textColor
    background
    width
    height

MIT © [cong85010](https://github.com/cong85010)
Website: [anhdangcode.com](https://anhdangcode.com)
Youtobe: [Kenh lap trinh](https://www.youtube.com/channel/UCTNMKVKKjVuHTR5_RIjEbqw)
