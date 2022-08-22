import {tab} from './tab'
import { maquee } from './maquee'
tab()
maquee()
import './styles/maquee.css'
import './styles/tab.less'
import './app.vue'

import gifSrc from'./assets/1.gif'
import pngSrc from'./assets/logo_small.png'

const gif = document.createElement('img')
const png = document.createElement('img')

gif.src = gifSrc
png.src = pngSrc

document.body.appendChild(gif)
document.body.appendChild(png)

import './assets/fonts/iconfont.css'
// class Person{
//     name='lmy'
// }