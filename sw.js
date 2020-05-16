self.addEventListener('install',evt =>{
    console.log('service worker dziala')
});

self.addEventListener('activate',evt => {
    console.log('service worker zostal aktywowany');
})