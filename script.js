const { createApp } = Vue

createApp({
    data() {
		return {
	        message: 'Hello Vue!',
            path: 'download.png'
		}
    }
}).mount('#titolo')