import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt' //컴포넌트간 데이터 전송을 편하게 해주는 라이브러리
let emitter = mitt();
let app = createApp(App)
app.config.globalProperties.emitter = emitter; //emitter를 전역적으로 사용할 수 있게해준다 -> this.emitter로 사용가능
/*
this.emitter.emit() 으로 발사하고
this.emitter.on() 으로 수신한다
*/

//createApp(App).mount('#app')
app.mount('#app')
