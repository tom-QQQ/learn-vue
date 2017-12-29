// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

new Vue({
  el: '#app-1',
  data: {
    message: '<h1>菜鸟教程</h1>',
    seen: true
  }
})

new Vue({
  el: '#app-2',
  data: {
    url: 'https://clm.changhong.com:9443/ccm/web/projects/SSC.YB.%E4%BA%91%E6%B8%B8%E4%BA%92%E8%81%94%E9%A1%B9%E7%9B%AE_%E6%95%8F%E6%8D%B7#action=com.ibm.team.dashboard.viewDashboard&team=%E4%BA%91%E6%B8%B8%E4%BA%92%E8%81%94%E4%BA%8C%E6%9C%9F%E5%9B%A2%E9%98%9F&tab=_2',
    message: '页面加载于' + new Date().toLocaleString(),
    // 设置打开到新标签页
    target: '_blank'
  }
})

new Vue({
  el: '#app-3',
  data: {
    message: 'Hello Vue.js'
  }
})

new Vue({
  el: '#app-4',
  data: {
    // 设置checkbox默认不被选中
    class1: false
  }
})

new Vue({
  el: '#app-6',
  data: {
    ok: true,
    message: 'RUNOOB',
    id: 1
  }
})

new Vue({
  el: '#app-7',
  data: {
    message: ''
  },
  methods: {
    reverseMessage: function () {
      if (this.message.length === 0) {
        this.emptyEmpty()
      } else {
        let preMessage = this.message
        let result = this.message.split('').reverse().join('')
        if (preMessage === result) {
          this.sameResult()
        } else {
          this.message = this.message.split('').reverse().join('')
        }
      }
    },
    empty: function () {
      if (this.message.length === 0) {
        this.emptyEmpty()
      } else {
        this.message = ''
      }
    },
    emptyEmpty: function () {
      alert('明明什么都没有，要怎么弄嘛~~')
    },
    sameResult: function () {
      alert('什么嘛，明明结果和之前一样，就不要浪费CPU啦~~')
    }
  }
})

new Vue({
  el: '#app-8',
  data: {
    message: ''
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    capitalize2: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toLowerCase() + value.slice(1)
    }
  }
})

new Vue({
  el: '#app-9',
  data: {
    message: 'miku',
    url: 'https://www.baidu.com/s?ie=UTF-8&wd=miku',
    target: '_blank'
  }
})

new Vue({
  el: '#app-10',
  data: {
    seen: true,
    ok: true
  }
})

new Vue({
  el: '#app-11',
  data: {
    Num: Math.random()
  }
})

// 父子级组件
const childNode = {
  template: '<div>childNode</div>'
}

const parentNode = {
  template: '<div class="parent">' +
              '<child/>' +
              '<child/>' +
            '</div>',
  // child用于替换相同名称的标签
  components: {
    'child': childNode
  }
}

new Vue({
  el: '#app-12',
  components: {
    'parent': parentNode
  }
})

const childNode1 = {
  template: '<div>{{message}}</div>',
  props: ['message']
}

const parentNode1 = {
  template: '<div class="parent">' +
              '<childNode message="aaa_13"></childNode>' +
              '<childNode message="bbb"></childNode>' +
            '</div>',
  components: {
    'childNode': childNode1
  }
}

new Vue({
  el: '#app-13',
  components: {
    'parent': parentNode1
  }
})

const childNode2 = {
  template: '<div>{{myMessage}}</div>',
  props: ['myMessage']
}

const parentNode2 = {
  template: '<div class="parent">' +
              '<child my-message="aaa_14"></child>' +
              '<child my-message="bbb"></child>' +
            '</div>',
  components: {
    'child': childNode2
  }
}

new Vue({
  el: '#app-14',
  components: {
    'parent': parentNode2
  }
})

const childNode3 = {
  template: '<div>{{myMessage}}</div>',
  props: ['myMessage']
}

const parentNode3 = {
  template: '<div class="parent">' +
              '<child :my-message="data1"></child>' +
              '<child :my-message="data2"></child>' +
            '</div>',
  components: {
    'child': childNode3
  },
  data () {
    return {
      'data1': 'aaa_15',
      'data2': 'bbb'
    }
  }
}

new Vue({
  el: '#app-15',
  components: {
    'parent': parentNode3
  }
})

const childNode4 = {
  template: '<div>{{myMessage}}的类型是{{type}}</div>',
  props: ['myMessage'],
  computed: {
    type () {
      return typeof this.myMessage
    }
  }
}

const parentNode4 = {
  template: '<div class="parent">' +
  '<child :my-message="1"></child>' +
  '</div>',
  components: {
    'child': childNode4
  }
}

new Vue({
  el: '#app-16',
  components: {
    'MyParent': parentNode4
  }
})
