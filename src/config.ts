export default {
  /**
   * Firebase用設定
   *
   * sw.jsの変更も必要です
   */
  firebase: {
    apiKey: 'AIzaSyDee_VkrRtByJCrCZAX3nTSDPl8AaHlWfY',
    authDomain: 'traq-r.firebaseapp.com',
    databaseURL: 'https://traq-r.firebaseio.com',
    projectId: 'traq-r',
    storageBucket: 'traq-r.appspot.com',
    messagingSenderId: '993645413001',
    appId: '1:993645413001:web:b253ea3776d6cf85163c58'
  },
  /**
   * skyway用設定
   */
  skyway: {
    apiKey: '4d358906-1245-41cc-8171-7f6700b09cc5'
  },
  /**
   * 表示されるサービス
   *
   * iconNameは`src/assets/icons`からのパス
   */
  services: [
    {
      label: 'Portal',
      iconName: 'services/portal',
      appLink: 'https://portal.trap.jp/'
    },
    {
      label: 'Official Website',
      iconName: 'services/traP',
      appLink: 'https://trap.jp/'
    },
    {
      label: 'Wiki',
      iconName: 'services/growi',
      appLink: 'https://wiki.trap.jp/'
    },
    {
      label: 'Blog',
      iconName: 'services/ghost',
      appLink: 'https://blog-admin.trap.jp/'
    },
    {
      label: 'Drive',
      iconName: 'services/nextcloud',
      appLink: 'https://drive.trap.jp/'
    },
    {
      label: 'Git',
      iconName: 'services/gitea',
      appLink: 'https://git.trap.jp/'
    },
    {
      label: 'Showcase',
      iconName: 'services/showcase',
      appLink: 'https://showcase.trapti.tech/'
    },
    {
      label: 'HackMD',
      iconName: 'services/hackmd',
      appLink: 'https://md.trap.jp/'
    },
    {
      label: 'anke-to',
      iconName: 'services/anke-to',
      appLink: 'https://anke-to.trap.jp/'
    },
    {
      label: 'booQ',
      iconName: 'services/booq',
      appLink: 'https://booq.trap.jp/'
    },
    {
      label: 'knoQ',
      iconName: 'services/knoq',
      appLink: 'https://knoq.trap.jp/'
    },
    {
      label: 'BOT Console',
      iconName: 'services/bot-console',
      appLink: 'https://bot-console.trap.jp/'
    }
  ],
  /**
   * OGPが表示されないようにするホスト
   */
  ogpIgnoreHostNames: [
    'wiki.trap.jp',
    'git.trap.jp',
    'md.trap.jp',
    'drive.trap.jp',
    'anke-to.trap.jp',
    'booq.trap.jp',
    'knoq.trap.jp',
    'wiki.trapti.tech',
    'git.trapti.tech',
    'md.trapti.tech',
    'drive.trapti.tech',
    'showcase.trapti.tech'
  ],
  /**
   * Wikiのユーザーページへのリンク
   * undefinedにするとリンクが表示されない
   */
  wikiPageOrigin: undefined,
  auth: {
    /**
     * ログイン画面での「パスワードを忘れた」のリンク
     * undefinedにするとリンクが表示されない
     */
    resetLink: undefined,
    /**
     * 設定画面での「パスワードは～から可能です」のリンク
     * undefinedにするとリンクが表示されない
     */
    changeLink: undefined,
    /**
     * 設定画面での「パスワードは～から可能です」の「～」の表示
     * undefinedにするとリンクが表示されない
     */
    changeName: undefined
  },
  /**
   * 内部用認証機構へのリダイレクト
   * 通常は`false`
   */
  pipelineEnabled: false,
  /**
   * QRコード表示ボタンの有効化
   */
  showQrCodeButton: false
} as const
