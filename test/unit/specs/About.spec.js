import Vue from 'vue'
import About from 'src/components/about'

describe('Hello.vue', () => {
  it('Deberia renderizar hola', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(About)
    })

    expect(vm.$el.querySelector('.about').textContent)
      .to.equal('hola')
  })
})
