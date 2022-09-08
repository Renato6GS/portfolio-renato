import { TECHNOLOGIES } from './TECHNOLOGIES';
import { WIDTHS_IMAGES } from './WIDTH_IMAGES';

export const PROJECTS = [
  {
    key: 'p1',
    title: 'SALUDQUETZAL',
    description: {
      EN: 'Web application to search for health services in my city.',
      ES: 'Aplicación web para buscar servicios de salud en mi ciudad.',
    },
    img: '/projects/saludquetzal-images.png',
    imgBlur:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALfSURBVHgBVVPLaiNHFL1Vt179UqtliWisIWSSQAKGZGFjrwJe+Q+0MPhj8g3OZ/gDsrS8nUVWSSBmyDCMkYZoGMuSJXVV1yOl8cjYt6iGpu45dc+5txBihBBIDDoajXB/fx+rqmJlWbKjoyN2dnaGp6en9ODggB4fH0PMgaeBcZOrqyscj8eq2+22LecVB+jIVq+sin6ZVp2yzNtZUXR5mjI4PDz0kSQ8I9BaK0qznlXwTcLE95Sn36ZZ6+tyZ+flYLc/qKqdSqZMBI72w82NOTk5sVsStiEofthPtV59pTj5OSD/ERG7KBXKNAeuCq2U/CiQ/mMbC1HeumkaHXH+gWA4JGQ8E5i0dpjC75jAnxD5QKoWF3kZeJLUcY8lhsYY8t4YczOZTMhWwqYC4NlLzFoiSSV2lBIvGMOBlDnPygrSrFhLpRyCa9OojXOOT01kw/i5G+yCzBKSK0azVNEoAbmQrF20IMtzHgmQNJoRxkg8Ire3u88rSFQH2mUK7VxCngqCFAkyHvJEEiUlxD8CcRHivwD/gicEQ+gkU6gSAankUMgECI3ZiJBwHgSNwOBRO8Ot1Tx2jPX7/ccKKMBFBAOkigfJODBCw2axOFuckE2fCQXHg9XKu1pRu4okb/GZhM5Oz8uUuEiw5kItvQ9LAtRwpDSCrXfOOLOEZnWL6OcRPNlOb2B7e3tBJnXTzqq7eOcYCH/beDBxwEVwjnhjvXXNJ1/XU9boeym8hfGLjSEPk3h5eQl//nHNGFhsIIDVfqVrM63Xyxtbr995u3xX14s35v7Ttb6f/7u288lKzpevX79xnyVsyjg/P6+1zqfGwN81hA+rucuMqwWghUIQnxNfMzebNXezj3ALi18Wv9vfYokbgq2bdDgcsuLVK/nf+5kUGrgxdTSAhW43Hq6p42Rl3DzXu/fX5tfRyG5NfGzHF1NIJCLT6ZQsFgtSFMXjq+v1euHi4sKHh8THOfgfnKczHIdWemUAAAAASUVORK5CYII=',
    size: WIDTHS_IMAGES.movil,
    urlDemo: 'https://salud-serach-aplp.vercel.app/',
    urlCode: null,
    technologies: [
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.postgresql,
      TECHNOLOGIES.algolia,
      TECHNOLOGIES.railway,
      TECHNOLOGIES.googlemaps,
    ],
  },
  {
    key: 'p2',
    title: 'HANGAME',
    description: {
      EN: 'A game about the hangman game with words from Spanish and English, where you can play with a friend.',
      ES: 'Un juego del ahorcado con palabras del Español e Inglés, donde tú podrás jugar con un amigo.',
    },
    img: '/projects/hangame-images.png',
    imgBlur:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKeSURBVHgBXVO7blNBEN3nfRobYyPxCAVFUoQqH5PPyD84v0ARpafMB9C6ToeQUQQFQSGGyHZyfZ/7XubasUMy0mhnd2dnz5yZwQjEe4/b9fj4GE8mk5X9VD6cnfkRuKK1bmXlfHh4SGEJugjF0trQlJah+MGJUWpmVSU556IsSzUej+0mEGuD7OzAY/5+4Ah5HTA28BYlnnisFPh545S11YtCLBZNfgP+t6PRSICuA4CBh8Nh4pV6RTk9CGi4C7AG1jtqrEXaaG2knpfPqh9URF/TNBVjNFbw1m0QoF6vF4RJOEx4tJvE8QFB5K11hiutvVRKwjrNlksU3s6ml3lzvTfdwxBknd7+/j4OegHrRt0kCaNBJ+nsMELeGe+4EMILJaUQEiGOLp1zKR1M2eL7Ykv0CkG/30dJmOA0Smmv06WUEGas4VVdIyobx0PGpJasSmocRzH5vwqrjWjEuiQErytDMMaEeITxqk4rAzwZHCP5uLxsY1ggTEiFgkAi6hiyTiNtjYdzDEqMlly4OrCspuWr8nEKjWgQZ7x9AL9ZT+B3Zx1SRnmjtFeiZkqWoVV5yI3kVFL6KIBSyuV5roMgqIC4HEAvvfMMSGuhKS2bUpS51UWJcFUTNP0D3YvahDyDLvSnn051nMYZLelv6LY+XObOWY4sAPLGYCMyVRTXVhZ5hxuzGwce4wcEXmda1ML+jT354oi7g5/7TjtmnAHunAPYFWqWN7ZWVzjL8x5a2m0KLY6jj0cyXaSzKIyMlXZqahNBENpyEwbER96rVNY11sWdYd1igr5tZ2FFxvnnc88s0/2kX8+ms+zq19Uiz/L5xeRi5kwxt3dq7mfLbPD8Tdm8/KlPTi4teiow0useWGvbH+R+Sulm397d+23lHy9Un/8FUOk2AAAAAElFTkSuQmCC',
    size: WIDTHS_IMAGES.movil,
    urlDemo: 'https://hangame-app.vercel.app/',
    urlCode: 'https://github.com/Renato6GS/hangame-app',
    technologies: [TECHNOLOGIES.nextjs, TECHNOLOGIES.mongodb],
  },
  {
    key: 'p3',
    title: 'Web APP for Production Assignment and review',
    description: {
      EN: 'Web system to manage and assign the production of policies for an insurer with a log that saves each action performed.',
      ES: 'Sistema web para gestionar y asignar la producción de pólizas para una aseguradora con una bitácora que guarda cada acción realizada.',
    },
    img: '/projects/production-images.png',
    imgBlur:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALnSURBVHgBZVPLTtwwFLUdJ848mExmhooOQqhF7QZRqcuqG34CPoHfYPiJLvgE+BIkkLoAVhSpMC+YRybvxIntXgfY0Cs58ePec889vsYITCmFT05O8M3NDXZdl+g9z/P0XPX7fazX4/FYve7L3d1ddXx8XK31IT46OqI7Ozt2p9OpY4ztdrtt2LaNiqLAjDHth6SUCka5Wq0yOEtub2+zwWAgKHw0COv1euvdbnfTaTpdYpKGZVnYNE1FKcXAUJVlKQEwbTabs+VyOdna2prBdkwhmGxvbzeB7iYAfAf0L/W67VKTGQYh2DAMBayQAOOcL8MwvAOg38AmOT09zSjUTfb29hjQ7gH6VxjfbJttUGqahBCkh9YIAjjMpxCMWq3WMEmSB0iKNQONbkKtjUaj3qnVan1g0QfqJsYEQXKoX2g98lfNHoFRQ8dAMkxBUUBkCErFkIFQahimqfObVPtD9kpAzguTF4WR57mRptx4E5cuFgs8m80QoZZCwFZIDu6OYKwGChBNXaVpquI45kEQFFEUFTAv9d50OkUUPmo268qsSEQUtnPH6SSu+yFqtdoms2qkLAWCrFkQ+KEfBE9RGC6SFxMVA9e9V0HgllH0nPvLVui03Pn6+kp1e5v22ppLpVaPcw/UH3ue/xBFwV2WZfoK0+vra0k977Ps1eeFFDLibDHNfa+JhHq2qA01WDYxjILn+WOcZX+SJPoLZYwheDiZTGLoUlHdQi+M88zmvojZEElRisAhRZYyIUoGTVBCwANc1R0wGUH9/mg0ii8uLvKrqytFz87O5a+TfU7HZE6JukeSz2tlIk0kETMosRsNkRI2cxz1BACry8vLXGeGf9Vg1UO5HhxYtz5qGiReK5TFxPrHcuPrT2FvfNJNI/PcSjlfxMPhD354iCvx3qwqYRedl8g5iEZRN/fTDNfzR0mCOzkSlnQcB4F+cn9/X+qHi95ZxQC6BWYYD/R68HIwGFTO/wW8t39KZssMklF34AAAAABJRU5ErkJggg==',
    size: WIDTHS_IMAGES.pc,
    urlDemo: null,
    urlCode: 'https://github.com/Renato6GS/polizas-app',
    technologies: [TECHNOLOGIES.nextjs, TECHNOLOGIES.sqlServer, TECHNOLOGIES.sendgrid],
  },
  {
    key: 'p4',
    title: 'POOL LANDING PAGE',
    description: {
      // eslint-disable-next-line quotes
      EN: "My first paid project with me to a computer science teacher, to advertise the client's pool maintenance services.",
      ES: 'Mi primer proyecto pagado con mi profesor de informática, para publicitar los servicios de mantenimineto de piscinas de un cliente.',
    },
    img: '/projects/pool-images.png',
    imgBlur:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALrSURBVHgBZVPbbhs3EB3elnuVLFd27Ri9pY0RIEBRIOibC+gn5O/x/+itD+1b2h/IY4Q2BVIXaAxE61hY7Wq5vE4pWehLBhgecsg55JA8BHaGSPZICIH5/LEP8+iLCPP96Ga5xD3e3OwQ4WCPi2czfl5eJt2xyDwvJErBdmEV/Un0nFv8Vhs/8q2eMDas12u9WCzCjojHhkKSSDXyU8c+OyOj8hgSmXlKSOI9hEBJEQZPU9yKkH4MzfZD0zTrAz+yuDs7Pf3myJRnX2GavcS8eOll+kMkec548rxI+eUkFU/PJTsboUtS5lQVQldNp/r29jZwaFtinsjUJcnnbFRdQjH6nkp5RjgXIiAULOAROD0m5q7qICRB3zVCvG9j3q5MDkoRkSUiZHnBsmIKWf4Fy/NzFglSCHDEEEfghjIMmKOaMlfllbjnT2Pe6z1BNCnHQGRCiJSMpCnjaSZkIkQeCSoaIA/apxh4oiVlCaOl8GR1eAUKxhDQAwgbILEuogFuB6BGI4nxMPRohw6GvgWjO7BWo7MG4cWLPQH/7tkzAOcRdIthGy/dmwBKBkcJagzQg4EuTjwEBXZogfRb0mx78ubN20eC8WoVvGy9BaPibo3l8t6TeGrE0gXLNdFEEW22MGhrlcFhcMa7cHV1hcvlEvjrqsKfaKd7ZR7QmHecQuZcfHinp8LbUjLLhHBbQk0dnPkYS+jqdW/qutv/Rga3P5LzrxvIeBGIUT2zw4aqTSO2bSf1djPyqp6Q4a5C/Y774W0w5u8UR6tfXr0yh5+4CF+W86Hr7AeVgaJ9V1tt/lWDvkiYnxScJGNgasz8AxD6Ty/Z/erhD4MIISrnUQsYxXR9fU27ruPWlmnb1hWlYSKpL47zhF1U6C+yeJPUN6S5X//685/qN0QftbfXwk6Eu3r8wd1sNtNK6Y1uWi4np7QMDONR3Eat3F/vS/N7XHfIOajxU9vFyTxKu65rcnJygjtpLxYQDvP/y/k/UDmq43negFEAAAAASUVORK5CYII=',
    size: WIDTHS_IMAGES.pcApple,
    urlDemo: 'https://pool-landing-page.vercel.app/',
    urlCode: 'https://github.com/Cloweling/pool-landing-page',
    technologies: [TECHNOLOGIES.gatsby],
  },
  {
    key: 'p5',
    title: 'CALCULATOR APP',
    description: {
      EN: 'A multi-theme calculator with the possibility of expanding its options with a scientific calculator.',
      ES: 'Una calculadora multi-tema con la posibilidad de expandir sus opciones con una calculadora científica.',
    },
    img: '/projects/calculator-images.png',
    imgBlur:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK/SURBVHgBbVNdbttIDCZnOCPZjp02P9gNut0Fil1km6APLfKWl6DHySlyjZzBh4hf81xURYGkcAvERpooduRY0ow0w47c2C2KEiAlUdL3feSQEoIxM56cnGAwcXx8LEJKhOfFdX9/f+FJkiD8xmQTwgcyy7Joe3u7G0XR+uHh4XpVVV3vfe/q6q77+cO4Ja1Xmeng0dEBD4dDXgJQw97v9/V0Ot3UWu+02+3NoKQtpRQt0YIOxx7YPQhcS59t1NeDwce78F/ZCF8oaGTv7Oz04lg+Vyp+ExQchPxrm9uXt+lkdzy6fnGX3v9RmlxbgKL7JHo4OHhlggq/UNCEwKqFoC0i+i/4a2b/TChSUhBIqUqS0YhQA1TFKIBcDQaDVT9ob28Py7KkXq/XRuQgn/8CxucCUQkULEEaEiGiHmqqOuiKhnQFIH500yEzyMYbYM+sAIVGQUqhJkJFEjTqqCsC6eoUaHlTFBZ0w1QWoS2AvrIMrsaGQQqJAQZiUJhzBkny8VeAAiwoAFOCQA5JBO/sYkKQQiExCWpLJZzSLd2RqvsvXlxcfC+hH4JzmnOTc2FqttY4Y3JXlYWvXeWd8B7aQuouRa0NHW1safX2/3W5UrCfJDzd3fUdQlsLl1kLEwLXNq5S1jusQnM8wVytUR1JCxHJUNVW0AZNqbwooc4yOyeaqqj+DJFaQ3Zp9lDqLM8DasEebKZlNeookT3VUHeilPHxHOTZ2Rmcn58LYww7AOuqelrMi1E6uR+Ob75+StPJJ5NnFzGby5jsl85Teb3tJvNBcvN9kIIOPj09NbPZ7Jasre+MGTvnojRN6WY8xuntV4A8r1lj3kJxT0bO3vcTtxzl5UCEJTmSweny8lKGJZLz+VyEcYUn4eUsy/jF37H789U/1ea7wp0MBjX8amGploDi0eXjSsufcvj43cq+ARseXy3gaWiJAAAAAElFTkSuQmCC',
    size: WIDTHS_IMAGES.movil,
    urlDemo: 'https://calculator-app-dusky.vercel.app/',
    urlCode: 'https://github.com/Renato6GS/calculator-app',
    technologies: [TECHNOLOGIES.react],
  },
  {
    key: 'p6',
    title: 'YOUTUBE CLONE',
    description: {
      EN: 'A little YouTube Clone. There is still work to do.',
      ES: 'Un pequeño clon de YouTube. Aun hay trabajo por hacer.',
    },
    img: '/projects/youtube-images.png',
    imgBlur:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKwSURBVHgBhVPbbhRHEK1Ld8/FBiPHxiwoUXAiK7IipMgPkXiIzEf4f/Z74rf8QHjh0U9oV0KAACF7MVcvs7tz6UtRs94Hg5DoUU/NtLqqTp06BXC5cLXp6OiI1fJVu/qm1Ua4slY/h2YweOKINgoiyZwLXC/PC330EjZirY1VVbUxxmYymbR6nHTLMivs7BR3N3/b8nV7K3P5ZqDejzBCBEuAKTSRUpzHrv0QYzgPofp0fn7e50imD3C3/HU9dXKHce2vRLyLhJuJgBgYCUSIU4foPySOTzGlx0TUqF+7CnCATcN5WdodctkeGHtPC7sFBiwuUUZhxlY8nQHHBD6d1R2fHhwc4MnJiV6DGsvS2cLwmjBuEcWfNfEAKFl1BhQRxNgIBlEmtwynkpw16rzkz+z37wzACiCboJiFBZMlFCsSe54UUIhI0QQKFK0oK4K937ivv4MO874cnitbc2V0AUYWgHEuJDUwLISpBTatWOM1S6eIWoH9ZWowbt+JZ8UbfBcZ5tqYCjHNNHGOoL7c9yOpR+qUkZA8JuRCxuPxZYBiPBZz7+/OO7pgg6da2E8JUlB7A1FyMqIlU5MQPlOESkM14CGudAA8UZ38svun1s5sHQYgmgmYStUzM9bMXEbTMuN3hZNTh/iMEJ9rsDf37z9oxn3ynqUsGyyKYn5W19M2JXgbo3/pPd4xKJtrhsrrKqvS4EVK4XVdu4uJedkeHx8vEfQB0vb23I9GML15c6PO8+nHpjGTJvpXxsr1dWvWt3Ok0pGnBG98Tp+2phv+f3mrIPGrwcDhcIij0ciMRu/cYMCZCi77/Vqe375hbRm8OEOz1+8X1Yv/Hi3+1R5/G+DqgOHh4SHtVRX+8c+uybSL+XqL4eI07t2+1j0YPrwUyI9WL0JZIuvHHHj4nXH+AmLCSU05W4WaAAAAAElFTkSuQmCC',
    size: WIDTHS_IMAGES.pcApple,
    urlDemo: 'https://youtube-clone-ecru.vercel.app/',
    urlCode: 'https://github.com/Renato6GS/youtube-clone',
    technologies: [TECHNOLOGIES.nextjs],
  },
  {
    key: 'p7',
    title: 'BLOGR',
    description: {
      EN: 'Landing page for product advertisement.',
      ES: 'Landing page para publicidad de productos.',
    },
    img: '/projects/blogr-images.png',
    imgBlur:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKwSURBVHgBXVNLbhNBEK3q7vnGgfBHJBBYsCFigZQlHMPniblEpFyBK7DxGYiSDQoKKNgJdjzjtj3T07+ix0mcQElV0+qpfvXqhxCEABCI4DMivut2Ee5K98ocHx/T3t4eBRe6+3vp/KXb5VtbWzGAzDaIJ44ZkWUplOvPcPH0FdX3Iytd0hRFoYbDoe71eu4qLgBvo8udnYTl6lEK+CqPxZuM89cOo5cmyzddp/OCss6D2kOitfadTkfv7u66fr+/BBCfez38OPqRPyR6HqH4IIi9BU+PkSPnbQRPGiyMIwffA/3DwECFax3ULwFas2HmMRf549i7t2kAAWSbGllUu1Aa5xUZO7DOg9d+YIz4PRr9WtVJvDs6wkUnFg+FyCOMHjHgWwzxpSMWgQ3h66ZZgAJpzKmcy7XyfCgKWdwCtCZrD56QQaDtW+pMaO8jE5guWO0vFYk/yojptESpJbvbBXF7DE3wHNAxBOfRe09KNThpJFxAhcO6gWk1x4uLEs7OTlavrtEChzwPFUuDJku1xKBShiZleDQu2PloHBXTURw6wbe3t/9NwT95Qk2cEw/lD51waK1TqNnM1FDUypdK8cZUiSOVrK25aHMz4iuA7s4Ofc0yr0WiPZEkYAV6yst5FUlDOJ9VThm1IF/ZCA1wVjMYpO3ghq4CLRmMOdcph7KC+GcqeIc8XRbaxCMWAEiTIy1j0oNYOJmG7NbgMoz0TQphvsX+vhot3DBk8S1xZmIdbExtE503Nc5dA9bVdULNOPV4di9h8n5TuFUK7XIcHBw0xeVsbKfW2hyHbqYSOZNiWExwVk7B2pkV3FbWsKnOktkRHK924aaaGBaEn56CGAxOOOdjHmKysjyFjTYK5/Rgfd19ep+ZyWHtev2+hf+FaAXIrpUH0OX3zh1e+63kL/J4lCv8Fs4UAAAAAElFTkSuQmCC',
    size: WIDTHS_IMAGES.movil,
    urlDemo: 'https://blogr-landing-page-6gs.netlify.app/',
    urlCode: 'https://github.com/Renato6GS/blogr-landing-page',
    technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.js],
  },
  {
    key: 'p8',
    title: 'Sunnysisde Agency Landing Page',
    description: {
      EN: 'My first page made entirely with vanilla.',
      ES: 'Mi primera página hecha enteramente con vanilla.',
    },
    img: '/projects/sunnyside-images.png',
    imgBlur:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALxSURBVHgBdZNLbhtHEIar+jkPUtSDtB6BkVgICEIyggAKsgyYQ/A+9HXCXS4QbYKstCRXiSNHkGhaosnhDDnT09NdGcpyYAdwbbrR6Pq7quv/ELZBhI8rvsLB4AxH9XYwgM9iNBkQwCuA4ZC2GR/PPyT2h+K4C6ol2yHFoZYy4hCGED5dYtbRKnlwmK7Ngq+K6WJsYDTyWyFRS7LD55nebX7TltHBkWrF+6jCkKF6FFcMsTKFiwK2piCZx2s7O0yCxQyGeZ1LHPrAX774cbeK9r7m4c4Fa7QuhG58L4Kwx3XYY0p1QcpT5PyoclaB8bnyJpu3/zBwfe3FRZriSohAhdEhb+10ZWP/O6XVkVRcSvRAyMjbugYu75wtfWXLu2q+d3vR7eLV5SWIq/wUz3wgQetY6rCtNXveiOi4wXIZYAkeGBWIxcoSeSHapGRUyUBcLRaPLYqzc4Cgtf0NhZJ73uQF79BGHtJcNqsEXN3lwsXuHYYCeMkcEKMmx7MVwGQrUGYZBokBLpaglYEYSjjgMzip/qG9co5V3UIA++CpTWYtwBZIy/ThvzEK1WiQXd77WEPJia0Dnaba3WS4eROQfeAAHKTaM5q3y7AIK5FLH5We8o8C4evXJHovSrmcLUVR3VpMD1bmrqL1fHdh0wAYMhO6IuebFbg4lYUoVBG7q/NzX3sB+HQ6xZe9Hiefc1XkFW6SrEjTNFnmWZKzLClZYhzcV9bf2jz/05v1X345e/tDVhaTyWRrJCBz7zadjr9L8pXxnt650l2XRnylEffjAKKWZKDq1mNX3TDLl+9dZkYfnAhbAd/prO14DMmzZywHlbwvSpquLb1padzZZaLRlMgi5S3z/q2VsNipSvsbESDiEwtPXAyHQxyPx2I8vlfHx1wzVuhvm0FwslvTUVlSgmU3D5v0719/3/xC5P4v8Clg2O/3Wbd2ae+nU6HrKQcNg9Xy1nVPmuXPw0v3KZFfDKoxp8fKgNV482ENJsDnj/4LM/aEKkvLEScAAAAASUVORK5CYII=',
    size: WIDTHS_IMAGES.pcApple,
    urlDemo: 'https://goofy-perlman-3d0bc0.netlify.app/',
    urlCode: 'https://github.com/Renato6GS/Sunnyside-agency-landing-page',
    technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.js],
  },
  {
    key: 'p9',
    title: 'UMG^REST',
    description: {
      EN: 'Menu of a virtual restaurant where you can consult the different foods and drinks that it offers.',
      ES: 'Menú de un restaurante virtual donde puedes consultar los diferentes alimentos y bebidas que ofrece.',
    },
    img: '/projects/umg-rest-images.png',
    imgBlur:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALESURBVHgBhVPLThsxFPVj7LEnjwZIgEC7QRWqEKpUsUBiUcFH5H/yPWXXH2g3XbKqkk1btRWCQCHkMTMe2+NHPYG0tKrUKx15RvY999wXAPcGH4ACcIVer/frfPhGD4DgkS1/om63SxFCPCCmlOLlA845kFJ6UpY2tVZZa+VoNFLhygX4RdSNjQ2eJEnb+3KT0niVUsK9B3DB4j0sjbGy1Lm1cBwIro0xk+vr66IiiSqC4Fx3Tm1zEr8iJN5hlK5SEgRhDJ0tvVBSIxWNVak/Sek+BpUy+KklAQwSWauRbDBKdms1/rLZbGw26nWCUARCdJ9mqcry/FII6SgqLudCXRwcHMCzszOwIFhJMKnRqMbrrL3aaj7rdDrdtbU2YYQBoQo/nkzl3WTi0zRri5IlfpJHwXlRv4oAsDgGMUOwyRleazXw9nqHbG0/JYzVQJ7nIEm45YxGt5wiIQpEaQQh3APD4fBeQZVQA2OACQYRJYBWhHHsecJhKLOvaRGUCJ+E0+rShxr4ZZeivb09j3HpPKRaO5gr5dJ5LjM6mTMmLValBJnIlSiEVlobYaRTSv0m4MOhjw4PtYdo6mB8kRZmzY+nZi5tK7STWaeQsUJm6WwutUitDpV0xgb51RwAPAop7O/v46AAe0BMkJIpbdM8L7JQ+UyK+cyo7MaV4sJI8dlY9SUv1NXR0YkcVsGrUVGqKzqd/HI2K4I490OK4ptxdptAsNpkPmlxAyg20xqB55kh0yLR6vT01C274IJzORiA2fo6Lyid3UnrR0LL7/XYNxmI6k8IRAnFJXLuaoXRSXs2Kd9VowrhH4sB+/0+HAwG0WBwQ7tdHIeBi583GNtqEZKY0tMIZee3Iv369oN44739m+DxgsHj42O0m6bwxeudKFYAs7qCZnphd7ca+qT/3lapg/+ZD4vkF8oA6vUA7v9jnX8CVXiPbh7dAzoAAAAASUVORK5CYII=',
    size: WIDTHS_IMAGES.pcApple,
    urlDemo: 'https://umg-restaurant-app.vercel.app/',
    urlCode: 'https://github.com/Renato6GS/umg-restaurant-app',
    technologies: [TECHNOLOGIES.nextjs],
  },
  {
    key: 'p10',
    title: 'UMG Clone',
    description: {
      EN: 'A replication of the landing page of my university.',
      ES: 'Una replicación de la página de inicio de mi universidad.',
    },
    img: '/projects/umg-images.png',
    imgBlur:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALLSURBVHgBdVPJbhtHEK3qbRaTlEFTsikjBqIESiABAQLffAiYj+D/8HuiW34gRoAceQrIHLLDkGjZsUyKy/RWXemRhEAx4Dp0DRrTr6pevYdwGwjM+USE8RjhXozv8tnpKd98TCZtZvjvYRujkRquO0ZIVTldFkZW0ubrsgSoqvyTlBy2lujaOfJ/2MXRkYOzs9QCqXwI+OWqgM/6gyjMk9LUfWBddWVCmeGRNPIuUCK5pQTvhDq4fPzj6v0lQHMHMBKfng47ruGnRtVfC1kcSYF9IbTQEpEFcNDJY1LvUMGv1smf/d4bC5cjB/AyKXi+znUOy85e57EQ9TEI9VVm4kmurhUyxJSYODlgd0ERUyK6iBDPn+d30ymAOmkaLAeVlr3uAxDlILH4BAmGnOtCIkgMjIw2EbbEDRCwZvlATafLG/5aDqC338uFK0xopI8gYwiaHOsYCTwRBIp5fFbEeSChRMkG7d0WhPcenXNAlK/IA0ebkwXvthx8AzFYzt3kDRNrDdDSAuj55OQWQBljOFw1iffIIzbbEHFN3m+icyWlJDNxoAU4pb1npBjBJs81z5vlLUBVVSxp5XFXLgHVeZ77EYQYVfAPJaZSJBBGoxUiXrP06wBsOW1pMT3IOpiDXCwW+OyLZ1kqhQROEcltOLq1SHZjMG5q5Vd7OrztynBegP3NsP09Nen1ixeHdj6f3wiJCzfcVft40ayuXZLxjbT+L0f2aYHY7wmu+3n20qRl8vFVI+RyEa7d2a0Sb7aQ9ve3YTaD1cGBaEpjr6zkBRP9ndvq9aTqPDIoaoNBKHwdErwfRB9+yN5prXPfODiZTHA2m6nZ7K0ZDmUhhC0+75bl4UOt6xjYKLF59c9u/ef3P+2+Y6YPAe4bDEejkTher/HLb45U4UCWHYdxeU7Hh13/7eQl3XfkRyMLoJVf7gzEeAxy0hoP/l/0X49mjLtjIziiAAAAAElFTkSuQmCC',
    size: WIDTHS_IMAGES.pcApple,
    urlDemo: 'https://landing-umg-clone.vercel.app/',
    urlCode: 'https://github.com/Renato6GS/landing-umg-clone',
    technologies: [TECHNOLOGIES.astro, TECHNOLOGIES.preact],
  },
];
