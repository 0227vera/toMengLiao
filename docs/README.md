---
home: true
lang: zh-CN
heroText: liaomeng-blog
heroImage: /img/aw.jpeg
footer: MIT Licensed | Copyright © 2020-present mengliao
---


<script>

export default {
  mounted () {
    this.rotateImg()
  },
  methods: {
    rotateImg() {
      const imgEle = document.querySelector('.hero>img')
      imgEle.addEventListener('mousemove', function() {
        this.classList.add('rotate')
      })
      imgEle.addEventListener('mouseleave', function() {
        this.classList.remove('rotate')
      })
    }
  }
}
</script>

<style>
  html, body { scroll-behavior:smooth; }
  .hero>img {
    width: 200px;
    height: 200px;
    object-fit:cover;
    border-radius: 50%;
    transition: transform .5s;
    cursor: pointer;
  }
  .rotate {
    transform: scale(1.2) rotate(360deg);
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
  }
</style>
